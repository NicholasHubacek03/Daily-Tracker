
    import { Controller, Get } from '@nestjs/common';
    import { TaskTag } from 'src/models/tasktag.entity';
    import { TasktagsService } from '../services/tasktag.service';
    
    @Controller('tasktag')
    export class TasktagsController {
      constructor(private readonly tasktagsService: TasktagsService) {}
    
      @Get()
      async getAllTasktags(): Promise<TaskTag[]> {
        return this.tasktagsService.findAll();
      }
    }
    