
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { UsersService } from '../services/user.service';
import { IUserDTO } from 'src/interfaces/general';

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
  async create(@Body() userData: IUserDTO): Promise<User> {
     return User.create({ firstName: userData.firstName, lastName: userData.lastName });
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() userData: IUserDTO){
    return this.usersService.updateUser(id, userData);
  }
  @Delete('id')
  remove(@Param('id') id: number){
    return this.usersService.remove(id);
  }
}