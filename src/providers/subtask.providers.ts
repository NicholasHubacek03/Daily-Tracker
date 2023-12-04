
    import { Subtask } from '../models/subtask.entity';

    export const subtasksProviders = [
    {
        provide: 'SUBTASK_REPOSITORY',
        useValue: Subtask,
    },
    ];
    