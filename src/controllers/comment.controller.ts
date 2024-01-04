
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Comment } from 'src/models/comment.entity';
    import { CommentsService } from '../services/comment.service';
    import { ICommentDTO } from 'src/interfaces/general';
    
    @Controller('comment')
    export class CommentsController {
      constructor(private readonly commentsService: CommentsService) {}
    
      @Get()
      async getAllComments(): Promise<Comment[]> {
        return this.commentsService.findAll();
      }
      @Get('id')
      getCommentById(@Param('id') id: number): Promise <Comment>{
        return this.commentsService.findOne(id);
      }
      @Post()
      async createComment(@Body() commentData: ICommentDTO): Promise <Comment>{
        return Comment.create({content: commentData.content})
      }
      @Put('id')
      update(@Param('id') id:number, @Body() commentData: ICommentDTO){
        return this.commentsService.update(id, commentData)
      }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.commentsService.remove(id);
      }
    }