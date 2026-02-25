import { Injectable } from '@nestjs/common';
import { AuthBody } from './auth.controller';
import { PrismaService } from 'src/user/prisma.service';
import { error } from 'console';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login({ authBody }: { authBody: AuthBody }) {
    const { email, password } = authBody;
    const hasPassword = await this.hasPassword({ password });
    console.log({ hasPassword, password });

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: authBody.email,
      },
    });

    if (!existingUser) {
      throw new Error("l'utilisateur n'existe pas");
    }

    const isPasswordSame = password === existingUser.password;
    if (!isPasswordSame) {
      return new error('le mit de pass est invalide');
    }

    return existingUser;
  }

  private async hasPassword({ password }: { password: string }) {
    const hasPassword = await bcrypt.hash(password, 10);
    return password;
  }
}
