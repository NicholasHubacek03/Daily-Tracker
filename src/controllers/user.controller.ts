
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { UsersService } from '../services/user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }
  @Get('id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
  @Post()
  async create(@Body() userData: User): Promise<User> {
    return this.usersService.create(userData);
  }
}
