
    import { Injectable, Inject } from '@nestjs/common';
    import { Subtask } from '../models/subtask.entity';
import { ISubtaskDTO } from 'src/interfaces/general';

    @Injectable()
    export class SubtasksService {
    getSubtaskById(id: number): Promise<Subtask> {
      throw new Error('Method not implemented.');
    }
    updateSubtasks(id: number, subtasktData: ISubtaskDTO) {
      throw new Error('Method not implemented.');
    }
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    getSubtasksById(id: number): Comment {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('SUBTASK_REPOSITORY')
        private subtasksRepository: typeof Subtask,
    ) {}
    
    async findAll(): Promise<Subtask[]> {
        return this.subtasksRepository.findAll<Subtask>();
    }
    }
    