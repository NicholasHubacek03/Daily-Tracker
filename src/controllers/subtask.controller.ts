
    import { Controller, Get } from '@nestjs/common';
    import { Subtask } from 'src/models/subtask.entity';
    import { SubtasksService } from '../services/subtask.service';
    
    @Controller('subtask')
    export class SubtasksController {
      constructor(private readonly subtasksService: SubtasksService) {}
    
      @Get()
      async getAllSubtasks(): Promise<Subtask[]> {
        return this.subtasksService.findAll();
      }
    }
    