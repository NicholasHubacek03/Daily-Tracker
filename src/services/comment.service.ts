
    import { Injectable, Inject } from '@nestjs/common';
    import { Comment } from '../models/comment.entity';
import { ICommentDTO } from 'src/interfaces/general';

    @Injectable()
    export class CommentsService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateComment(id: number, commentData: ICommentDTO) {
      throw new Error('Method not implemented.');
    }
    getCommentById(id: number): Comment {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('COMMENT_REPOSITORY')
        private commentsRepository: typeof Comment,
    ) {}
    
    async findAll(): Promise<Comment[]> {
        return this.commentsRepository.findAll<Comment>();
    }
    }
    