
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Task } from 'src/models/task.entity';
    import { TasksService } from '../services/task.service';
import { ITaskDTO } from 'src/interfaces/general';
    
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
      async createTask(@Body() taskData: ITaskDTO): Promise <Task>{
        return Task.create({ firstName: taskData.title, lastName: taskData.description});
      }
      @Put(':id')
      update(@Param('id') id: number, @Body() taskData: ITaskDTO){
      return this.tasksService.updateTask(id, taskData);
        }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.tasksService.remove(id);
        }
    }
    