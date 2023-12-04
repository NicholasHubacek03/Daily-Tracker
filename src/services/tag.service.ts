
    import { Injectable, Inject } from '@nestjs/common';
    import { Tag } from '../models/tag.entity';

    @Injectable()
    export class TagsService {
    constructor(
        @Inject('TAG_REPOSITORY')
        private tagsRepository: typeof Tag,
    ) {}
    
    async findAll(): Promise<Tag[]> {
        return this.tagsRepository.findAll<Tag>();
    }
    }
    