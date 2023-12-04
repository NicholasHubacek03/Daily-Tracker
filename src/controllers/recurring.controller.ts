
    import { Controller, Get } from '@nestjs/common';
    import { Recurring } from 'src/models/recurring.entity';
    import { RecurringsService } from '../services/recurring.service';
    
    @Controller('recurring')
    export class RecurringsController {
      constructor(private readonly recurringsService: RecurringsService) {}
    
      @Get()
      async getAllRecurrings(): Promise<Recurring[]> {
        return this.recurringsService.findAll();
      }
    }
    