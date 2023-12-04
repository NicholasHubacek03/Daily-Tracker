
    import { Injectable, Inject } from '@nestjs/common';
    import { Subtask } from '../models/subtask.entity';

    @Injectable()
    export class SubtasksService {
    constructor(
        @Inject('SUBTASK_REPOSITORY')
        private subtasksRepository: typeof Subtask,
    ) {}
    
    async findAll(): Promise<Subtask[]> {
        return this.subtasksRepository.findAll<Subtask>();
    }
    }
    