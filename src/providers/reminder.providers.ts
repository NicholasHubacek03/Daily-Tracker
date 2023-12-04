
    import { Reminder } from '../models/reminder.entity';

    export const remindersProviders = [
    {
        provide: 'REMINDER_REPOSITORY',
        useValue: Reminder,
    },
    ];
    