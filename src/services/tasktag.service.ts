
    import { Injectable, Inject } from '@nestjs/common';
    import { TaskTag } from '../models/tasktag.entity';
import { ITasktagDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class TasktagsService extends BaseService<TaskTag> {
 
    constructor(
        @Inject('TASKTAG_REPOSITORY')
        private tasktagsRepository: typeof TaskTag,
    ) {
      super(TaskTag);
    }
    
    }
    