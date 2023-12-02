
    import { Injectable, Inject } from '@nestjs/common';
    import { Comment } from '../models/comment.entity';

    @Injectable()
    export class CommentsService {
    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentsRepository: typeof Comment,
    ) {}
    
    async findAll(): Promise<Comment[]> {
        return this.commentsRepository.findAll<Comment>();
    }
    }
    