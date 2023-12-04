
    import { Module } from '@nestjs/common';
    import { TagsController } from '../controllers/tag.controller';
    import { TagsService } from '../services/tag.service';
    import { tagsProviders } from '../providers/tag.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [TagsController],
    providers: [TagsService, ...tagsProviders],
    })
    export class TagModule {}
    