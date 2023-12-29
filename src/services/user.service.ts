
    import { Injectable, Inject } from '@nestjs/common';
    import { User } from '../models/user.entity';
import { IUserDTO } from 'src/interfaces/general';

    @Injectable()
    export class UsersService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateUser(id: number, userData: IUserDTO) {
      throw new Error('Method not implemented.');
    }
    create: this;

    constructor(
        @Inject('USER_REPOSITORY')
        private usersRepository: typeof User,
    ) {}
    
    async findOne(id:number): Promise<User> {
        return this.usersRepository.findOne<User>({
        where: {id}
        });
    }
    
    async findAll(): Promise<User[]> {
        return this.usersRepository.findAll<User>();
    }

    }
    