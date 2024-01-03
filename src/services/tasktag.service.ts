
    import { Injectable, Inject } from '@nestjs/common';
    import { TaskTag } from '../models/tasktag.entity';
import { ITasktagDTO } from 'src/interfaces/general';

    @Injectable()
    export class TasktagsService {
    updateTasktag(id: number, tasktagData: ITasktagDTO) {
      throw new Error('Method not implemented.');
    }
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    create(tasktagData: ITasktagDTO): TaskTag | PromiseLike<TaskTag> {
      throw new Error('Method not implemented.');
    }
    getTasktagById(id: number): TaskTag {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('TASKTAG_REPOSITORY')
        private tasktagsRepository: typeof TaskTag,
    ) {}
    
    async findAll(): Promise<TaskTag[]> {
        return this.tasktagsRepository.findAll<TaskTag>();
    }
    }
    