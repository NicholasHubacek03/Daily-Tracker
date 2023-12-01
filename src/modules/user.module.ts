
    import { Module } from '@nestjs/common';
    import { UsersController } from '../controllers/user.controller';
    import { UsersService } from '../services/user.service';
    import { usersProviders } from '../providers/user.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...usersProviders],
    })
    export class UserModule {}
    