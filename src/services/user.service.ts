
    import { Injectable, Inject } from '@nestjs/common';
    import { User } from '../models/user.entity';
import { IUserDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class UsersService extends BaseService<User> {
 
    constructor(
        @Inject('USER_REPOSITORY')
        private UsersRepository: typeof User,
    ) {
      super(User);
    }
    
    }
    