
    import { Body, Controller, Get, Param, Post } from '@nestjs/common';
    import { Task } from 'src/models/task.entity';
    import { TasksService } from '../services/task.service';
    
    @Controller('task')
    export class TasksController {
      constructor(private readonly tasksService: TasksService) {}
    
      @Get()
      async getAllTasks(): Promise<Task[]> {
        return this.tasksService.findAll();
      }
      @Get('id')
      getTaskById(@Param('id') id: number): Task {
        return this.tasksService.getTaskById(id);
      }
      @Post()
      async createTask(@Body() create)
    }
    