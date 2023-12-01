
    import { Task } from '../models/task.entity';

    export const tasksProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useValue: Task,
    },
    ];
    