
    import { Recurring } from '../models/recurring.entity';

    export const recurringsProviders = [
    {
        provide: 'RECURRING_REPOSITORY',
        useValue: Recurring,
    },
    ];
    