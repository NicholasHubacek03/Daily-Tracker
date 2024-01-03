
    import { Injectable, Inject } from '@nestjs/common';
    import { Tag } from '../models/tag.entity';
import { ITagDTO } from 'src/interfaces/general';

    @Injectable()
    export class TagsService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateTag(id: number, tagtData: ITagDTO) {
      throw new Error('Method not implemented.');
    }
    getTagById(id: number): Comment {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('TAG_REPOSITORY')
        private tagsRepository: typeof Tag,
    ) {}
    
    async findAll(): Promise<Tag[]> {
        return this.tagsRepository.findAll<Tag>();
    }
    }
    