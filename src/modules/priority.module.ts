
    import { Module } from '@nestjs/common';
    import { PrioritysController } from '../controllers/priority.controller';
    import { PrioritysService } from '../services/priority.service';
    import { prioritysProviders } from '../providers/priority.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [PrioritysController],
    providers: [PrioritysService, ...prioritysProviders],
    })
    export class PriorityModule {}
    