
    import { Injectable, Inject } from '@nestjs/common';
    import { Priority } from '../models/priority.entity';

    @Injectable()
    export class PrioritysService {
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
    