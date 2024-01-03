
    import { Injectable, Inject } from '@nestjs/common';
    import { Reminder } from '../models/reminder.entity';
import { IReminderDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class RemindersService extends BaseService<Reminder> {
 
    constructor(
        @Inject('REMINDER_REPOSITORY')
        private remindersRepository: typeof Reminder,
    ) {
      super(Reminder);
    }
    
    }
    