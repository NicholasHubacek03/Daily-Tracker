
    import { Injectable, Inject } from '@nestjs/common';
    import { Priority } from '../models/priority.entity';
import { IPriorityDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';

@Injectable()
export class PrioritysService extends BaseService<Priority> {

constructor(
    @Inject('PRIORITY_REPOSITORY')
    private prioritysRepository: typeof Priority,
) {
  super(Priority);
}

}
    