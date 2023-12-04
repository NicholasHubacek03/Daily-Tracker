
    import { Module } from '@nestjs/common';
    import { SubtasksController } from '../controllers/subtask.controller';
    import { SubtasksService } from '../services/subtask.service';
    import { subtasksProviders } from '../providers/subtask.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [SubtasksController],
    providers: [SubtasksService, ...subtasksProviders],
    })
    export class SubtaskModule {}
    