
    import { Controller, Get } from '@nestjs/common';
    import { Priority } from 'src/models/priority.entity';
    import { PrioritysService } from '../services/priority.service';
    
    @Controller('priority')
    export class PrioritysController {
      constructor(private readonly prioritysService: PrioritysService) {}
    
      @Get()
      async getAllPrioritys(): Promise<Priority[]> {
        return this.prioritysService.findAll();
      }
    }
    