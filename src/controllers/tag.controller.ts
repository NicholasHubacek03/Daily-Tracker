
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Tag } from 'src/models/tag.entity';
    import { TagsService } from '../services/tag.service';
import { ITagDTO } from 'src/interfaces/general';
    
    @Controller('tag')
    export class TagsController {
      constructor(private readonly tagsService: TagsService) {}
    
      @Get()
      async getAllTags(): Promise<Tag[]> {
        return this.tagsService.findAll();
      }
      @Get('id')
      findOne(@Param('id') id: number): Promise <Tag>{
        return this.tagsService.findOne(id);
      }
      @Post()
      async createTag(@Body() tagData: ITagDTO): Promise <Tag>{
        return Tag.create({tag: tagData.tag})
      }
      @Put(':id')
      update(@Param('id') id:number, @Body() tagtData: ITagDTO){
        return this.tagsService.update(id, tagtData)
      }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.tagsService.remove(id);
      }
    }
    