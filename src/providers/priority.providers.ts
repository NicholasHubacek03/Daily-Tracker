
    import { Priority } from '../models/priority.entity';

    export const prioritysProviders = [
    {
        provide: 'PRIORITY_REPOSITORY',
        useValue: Priority,
    },
    ];
    