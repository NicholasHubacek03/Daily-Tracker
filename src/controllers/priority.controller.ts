
    import { Body, Controller, Get, Param, Post } from '@nestjs/common';
    import { Priority } from 'src/models/priority.entity';
    import { PrioritysService } from '../services/priority.service';
import { IPriorityDTO } from 'src/interfaces/general';
    
    @Controller('priority')
    export class PrioritysController {
      constructor(private readonly prioritysService: PrioritysService) {}
    
      @Get()
      async getAllPrioritys(): Promise<Priority[]> {
        return this.prioritysService.findAll();
      }
      @Get('id')
      getPriorityById(@Param('id') id: number): Priority{
        return this.prioritysService.getPriorityById(id);
      }
      @Post()
      async createPriority(@Body() priorityData: IPriorityDTO): Promise <Priority>{
        
      }
    }
      // @Post()
      // async createComment(@Body() commentData: ICommentDTO): Promise <Comment>{
      //   return Comment.create({content: commentData.content})
      // }
      // @Put(':id')
      // update(@Param('id') id:number, @Body() commentData: ICommentDTO){
      //   return this.commentsService.updateComment(id, commentData)
      // }
      // @Delete('id')
      // remove(@Param('id') id: number){
      //   return this.commentsService.remove(id);
      // }