
    import { Injectable, Inject } from '@nestjs/common';
    import { TaskTag } from '../models/tasktag.entity';

    @Injectable()
    export class TasktagsService {
    constructor(
        @Inject('TASKTAG_REPOSITORY')
        private tasktagsRepository: typeof TaskTag,
    ) {}
    
    async findAll(): Promise<TaskTag[]> {
        return this.tasktagsRepository.findAll<TaskTag>();
    }
    }
    