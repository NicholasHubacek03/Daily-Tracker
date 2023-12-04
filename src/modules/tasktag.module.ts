
    import { Module } from '@nestjs/common';
    import { TasktagsController } from '../controllers/tasktag.controller';
    import { TasktagsService } from '../services/tasktag.service';
    import { tasktagsProviders } from '../providers/tasktag.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [TasktagsController],
    providers: [TasktagsService, ...tasktagsProviders],
    })
    export class TasktagModule {}
    