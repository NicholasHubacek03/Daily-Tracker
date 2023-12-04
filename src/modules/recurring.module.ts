
    import { Module } from '@nestjs/common';
    import { RecurringsController } from '../controllers/recurring.controller';
    import { RecurringsService } from '../services/recurring.service';
    import { recurringsProviders } from '../providers/recurring.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [RecurringsController],
    providers: [RecurringsService, ...recurringsProviders],
    })
    export class RecurringModule {}
    