
    import { TaskTag } from '../models/tasktag.entity';

    export const tasktagsProviders = [
    {
        provide: 'TASKTAG_REPOSITORY',
        useValue: TaskTag,
    },
    ];
    