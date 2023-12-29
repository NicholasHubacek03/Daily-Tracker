
    import { Injectable, Inject } from '@nestjs/common';
    import { Task } from '../models/task.entity';
import { ITaskDTO } from 'src/interfaces/general';

    @Injectable()
    export class TasksService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateTask(id: number, taskData: ITaskDTO) {
      throw new Error('Method not implemented.');
    }
    getTaskById(id: number): Task {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('TASK_REPOSITORY')
        private tasksRepository: typeof Task,
    ) {}
    
    async findAll(): Promise<Task[]> {
        return this.tasksRepository.findAll<Task>();
    }
    }
    