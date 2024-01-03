
    import { Injectable, Inject } from '@nestjs/common';
    import { Subtask } from '../models/subtask.entity';
import { ISubtaskDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

    @Injectable()
    export class SubtasksService extends BaseService<Subtask> {
 
    constructor(
        @Inject('SUBTASK_REPOSITORY')
        private subtasksRepository: typeof Subtask,
    ) {
      super(Subtask);
    }
    
    }
    