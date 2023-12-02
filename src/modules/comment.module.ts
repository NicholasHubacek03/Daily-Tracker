
    import { Module } from '@nestjs/common';
    import { CommentsController } from '../controllers/comment.controller';
    import { CommentsService } from '../services/comment.service';
    import { commentsProviders } from '../providers/comment.providers';
    import { DatabaseModule } from './database.module';

    @Module({
    imports: [DatabaseModule],
    controllers: [CommentsController],
    providers: [CommentsService, ...commentsProviders],
    })
    export class CommentModule {}
    