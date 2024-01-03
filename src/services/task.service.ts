
    import { Injectable, Inject } from '@nestjs/common';
    import { Task } from '../models/task.entity';
import { ITaskDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class TasksService extends BaseService<Task> {
 
    constructor(
        @Inject('TASK_REPOSITORY')
        private tasksRepository: typeof Task,
    ) {
      super(Task);
    }
    
    }
    