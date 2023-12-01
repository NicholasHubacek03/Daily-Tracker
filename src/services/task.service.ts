
    import { Injectable, Inject } from '@nestjs/common';
    import { Task } from '../models/task.entity';

    @Injectable()
    export class TasksService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private tasksRepository: typeof Task,
    ) {}
    
    async findAll(): Promise<Task[]> {
        return this.tasksRepository.findAll<Task>();
    }
    }
    