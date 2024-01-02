
    import { Injectable, Inject } from '@nestjs/common';
    import { Priority } from '../models/priority.entity';
import { IPriorityDTO } from 'src/interfaces/general';

    @Injectable()
    export class PrioritysService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updatePriority(id: number, commentData: IPriorityDTO) {
      throw new Error('Method not implemented.');
    }
    getPriorityById(id: number): Priority {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('PRIORITY_REPOSITORY')
        private prioritysRepository: typeof Priority,
    ) {}
    
    async findAll(): Promise<Priority[]> {
        return this.prioritysRepository.findAll<Priority>();
    }
    }
    