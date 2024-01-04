
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskTag } from 'src/models/tasktag.entity';
import { TasktagsService } from '../services/tasktag.service';
import { ITasktagDTO } from 'src/interfaces/general';

@Controller('tasktag')
export class TasktagsController {
  constructor(private readonly tasktagsService: TasktagsService) { }

  @Get()
  async getAllTasktags(): Promise<TaskTag[]> {
    return this.tasktagsService.findAll();
  }
  @Get('id')
  find(@Param('id') id: number): Promise<TaskTag>{
    return this.tasktagsService.findOne(id);
  }
  @Post()
  async createComment(@Body() tasktagData: ITasktagDTO): Promise <TaskTag>{
    return this.tasktagsService.create(tasktagData)
  }
  @Put('id')
  update(@Param('id') id:number, @Body() tasktagData: ITasktagDTO){
    return this.tasktagsService.update(id, tasktagData)
  }
  @Delete('id')
  remove(@Param('id') id: number){
    return this.tasktagsService.remove(id);
  } 
}
