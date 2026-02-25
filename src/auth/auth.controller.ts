import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

export type AuthBody = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  //   @Post('register')
  //   async register(@Body() registerBody: createUser) {
  //     return await this.AuthService.register({
  //       registerBody,
  //     });
  //   }

  //localhost:3000/login
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    return await this.AuthService.login({
      authBody,
    });
  }
}
