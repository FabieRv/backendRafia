import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthBody, CreateUser } from './auth.controller';
import { PrismaService } from 'src/user/prisma.service';
import { error } from 'console';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(authRegister: CreateUser) {
    const { name, email, password, phone, adress } = authRegister;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        adress,
        phone,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  async login({ authBody }: { authBody: AuthBody }) {
    const { email, password } = authBody;
    const hasPassword = await this.hasPassword(password);

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      throw new NotFoundException("l'utilisateur n'existe pas");
    }
    const isPasswordValid = await this.isPasswordValid(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('le mot de pass est invalide');
    }
    return existingUser;
  }

  private async hasPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  private async isPasswordValid(password: string, hashedPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  }
}
