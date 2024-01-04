
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Subtask } from 'src/models/subtask.entity';
    import { SubtasksService } from '../services/subtask.service';
import { ISubtaskDTO } from 'src/interfaces/general';
    
    @Controller('subtask')
    export class SubtasksController {
      constructor(private readonly subtasksService: SubtasksService) {}
    
      @Get()
      async getAllSubtasks(): Promise<Subtask[]> {
        return this.subtasksService.findAll();
      }
      @Get('id')
      findOne(@Param('id') id: number): Promise<Subtask> {
        return this.subtasksService.findOne(id);
      }
      @Post()
      async createSubtasks(@Body() subtasktData: ISubtaskDTO): Promise <Subtask>{
        return Subtask.create({title: subtasktData.title, })
      }
      @Put(':id')
      update(@Param('id') id:number, @Body() subtasktData: ISubtaskDTO){
        return this.subtasksService.update(id, subtasktData)
      }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.subtasksService.remove(id);
      }
    }
    