import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  //localhost:3000/users
  getUsers() {
    return this.UserService.getUsers();
  }
}
