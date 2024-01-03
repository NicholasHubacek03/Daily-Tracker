
    import { Injectable, Inject } from '@nestjs/common';
    import { Tag } from '../models/tag.entity';
import { ITagDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class TagsService extends BaseService<Tag> {
 
    constructor(
        @Inject('TAG_REPOSITORY')
        private tagsRepository: typeof Tag,
    ) {
      super(Tag);
    }
    
    }
    