
    import { User } from '../models/user.entity';

    export const usersProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    },
    ];
    