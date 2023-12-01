
    import { Controller, Get } from '@nestjs/common';
    import { Task } from 'src/models/task.entity';
    import { TasksService } from '../services/task.service';
    
    @Controller('task')
    export class TasksController {
      constructor(private readonly tasksService: TasksService) {}
    
      @Get()
      async getAllTasks(): Promise<Task[]> {
        return this.tasksService.findAll();
      }
    }
    