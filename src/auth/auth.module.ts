import { JwtModule } from '@nestjs/jwt';
// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/user/prisma.service';
import { register } from 'module';

@Module({
  imports:[
    JwtModule.register({
      secret:"SCRET_KEY",
      signOptions:{expiresIn: '1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
