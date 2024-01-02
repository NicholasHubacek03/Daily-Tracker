
    import { Injectable, Inject } from '@nestjs/common';
    import { Recurring } from '../models/recurring.entity';
import { IRecurringDTO } from 'src/interfaces/general';

    @Injectable()
    export class RecurringsService {
    remove(id: number) {
      throw new Error('Method not implemented.');
    }
    updateRecurring(id: number, recurringData: IRecurringDTO) {
      throw new Error('Method not implemented.');
    }
    getRecurringById(id: number): Recurring {
      throw new Error('Method not implemented.');
    }
    constructor(
        @Inject('RECURRING_REPOSITORY')
        private recurringsRepository: typeof Recurring,
    ) {}
    
    async findAll(): Promise<Recurring[]> {
        return this.recurringsRepository.findAll<Recurring>();
    }
    }
    