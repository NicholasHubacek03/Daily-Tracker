
    import { Controller, Get } from '@nestjs/common';
    import { Comment } from 'src/models/comment.entity';
    import { CommentsService } from '../services/comment.service';
    
    @Controller('comment')
    export class CommentsController {
      constructor(private readonly commentsService: CommentsService) {}
    
      @Get()
      async getAllComments(): Promise<Comment[]> {
        return this.commentsService.findAll();
      }
      @Get('id')
      
    }
    //       @Get()
    //   async getAllTasks(): Promise<Task[]> {
    //     return this.tasksService.findAll();
    //   }
    //   @Get('id')
    //   getTaskById(@Param('id') id: number): Task {
    //     return this.tasksService.getTaskById(id);
    //   }
    //   @Post()
    //   async createTask(@Body() taskData: ITaskDTO): Promise <Task>{
    //     return Task.create({ firstName: taskData.title, lastName: taskData.description});
    //   }
    //   @Put(':id')
    //   update(@Param('id') id: number, @Body() taskData: ITaskDTO){
    //   return this.tasksService.updateTask(id, taskData);
    //     }
    //   @Delete('id')
    //   remove(@Param('id') id: number){
    //     return this.tasksService.remove(id);
    //     }
    // }