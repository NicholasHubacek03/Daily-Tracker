
    import { Injectable, Inject } from '@nestjs/common';
    import { Reminder } from '../models/reminder.entity';

    @Injectable()
    export class RemindersService {
    constructor(
        @Inject('REMINDER_REPOSITORY')
        private remindersRepository: typeof Reminder,
    ) {}
    
    async findAll(): Promise<Reminder[]> {
        return this.remindersRepository.findAll<Reminder>();
    }
    }
    