
    import { Controller, Get } from '@nestjs/common';
    import { Reminder } from 'src/models/reminder.entity';
    import { RemindersService } from '../services/reminder.service';
    
    @Controller('reminder')
    export class RemindersController {
      constructor(private readonly remindersService: RemindersService) {}
    
      @Get()
      async getAllReminders(): Promise<Reminder[]> {
        return this.remindersService.findAll();
      }
    }
    