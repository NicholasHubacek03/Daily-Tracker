
    import { Controller, Get } from '@nestjs/common';
    import { User } from 'src/models/user.entity';
    import { UsersService } from '../services/user.service';
    
    @Controller('user')
    export class UsersController {
      constructor(private readonly usersService: UsersService) {}
    
      @Get()
      async getAllUsers(): Promise<User[]> {
        return this.usersService.findAll();
      }
    }
    