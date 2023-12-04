
    import { Injectable, Inject } from '@nestjs/common';
    import { Recurring } from '../models/recurring.entity';

    @Injectable()
    export class RecurringsService {
    constructor(
        @Inject('RECURRING_REPOSITORY')
        private recurringsRepository: typeof Recurring,
    ) {}
    
    async findAll(): Promise<Recurring[]> {
        return this.recurringsRepository.findAll<Recurring>();
    }
    }
    