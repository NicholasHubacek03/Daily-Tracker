
    import { Injectable, Inject } from '@nestjs/common';
    import { Recurring } from '../models/recurring.entity';
import { IRecurringDTO } from 'src/interfaces/general';
import { BaseService } from './base.service';


    @Injectable()
    export class RecurringsService extends BaseService<Recurring> {
 
    constructor(
        @Inject('RECURRING_REPOSITORY')
        private recurringsRepository: typeof Recurring,
    ) {
      super(Recurring);
    }
    
    }
    