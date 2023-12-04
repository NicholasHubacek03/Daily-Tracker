
    import { Module } from '@nestjs/common';
    import { RemindersController } from '../controllers/reminder.controller';
    import { RemindersService } from '../services/reminder.service';
    import { remindersProviders } from '../providers/reminder.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [RemindersController],
    providers: [RemindersService, ...remindersProviders],
    })
    export class ReminderModule {}
    