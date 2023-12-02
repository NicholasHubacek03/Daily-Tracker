
    import { Controller, Get } from '@nestjs/common';
    import { Comment } from 'src/models/comment.entity';
    import { CommentsService } from '../services/comment.service';
    
    @Controller('comment')
    export class CommentsController {
      constructor(private readonly commentsService: CommentsService) {}
    
      @Get()
      async getAllComments(): Promise<Comment[]> {
        return this.commentsService.findAll();
      }
    }
    