
    import { Module } from '@nestjs/common';
    import { TasksController } from '../controllers/task.controller';
    import { TasksService } from '../services/task.service';
    import { tasksProviders } from '../providers/task.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [TasksController],
    providers: [TasksService, ...tasksProviders],
    })
    export class TaskModule {}
    