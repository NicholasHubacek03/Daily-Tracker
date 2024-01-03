
    import { Injectable, Inject } from '@nestjs/common';
    import { Comment } from '../models/comment.entity';
import { ICommentDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class CommentsService extends BaseService<Comment> {
 
    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentsRepository: typeof Comment,
    ) {
      super(Comment);
    }
    
    }
    