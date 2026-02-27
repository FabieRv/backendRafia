import { register } from 'module';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

export type AuthBody = {
  email: string;
  password: string;
};
export type CreateUser = {
  name: string;
  email: string;
  phone: string;
  adress: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //localhost:3000/register
  @Post('register')
  async register(@Body() authRegister: CreateUser) {
    return this.authService.register(authRegister);
  }

  //localhost:3000/login
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return await this.authService.login({
      authBody,
    });
  }
}
