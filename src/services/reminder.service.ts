
    import { Injectable, Inject } from '@nestjs/common';
    import { Reminder } from '../models/reminder.entity';
import { IReminderDTO } from 'src/interfaces/general';

    @Injectable()
    export class RemindersService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateReminder(id: number, reminderData: IReminderDTO) {
      throw new Error('Method not implemented.');
    }
    getReminderById(id: number): Reminder {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('REMINDER_REPOSITORY')
        private remindersRepository: typeof Reminder,
    ) {}
    
    async findAll(): Promise<Reminder[]> {
        return this.remindersRepository.findAll<Reminder>();
    }
    }
    