
    import { Controller, Get } from '@nestjs/common';
    import { Tag } from 'src/models/tag.entity';
    import { TagsService } from '../services/tag.service';
    
    @Controller('tag')
    export class TagsController {
      constructor(private readonly tagsService: TagsService) {}
    
      @Get()
      async getAllTags(): Promise<Tag[]> {
        return this.tagsService.findAll();
      }
    }
    