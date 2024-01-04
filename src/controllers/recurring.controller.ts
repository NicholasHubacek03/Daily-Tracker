
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Recurring } from 'src/models/recurring.entity';
    import { RecurringsService } from '../services/recurring.service';
import { IRecurringDTO } from 'src/interfaces/general';
    
    @Controller('recurring')
    export class RecurringsController {
      constructor(private readonly recurringsService: RecurringsService) {}
    
      @Get()
      async getAllRecurrings(): Promise<Recurring[]> {
        return this.recurringsService.findAll();
      }
      @Get('id')
      findOne(@Param('id') id: number): Promise <Recurring>{
        return this.recurringsService.findOne(id);
      }
      @Post()
      async createRecurring(@Body() recurringData: IRecurringDTO): Promise <Recurring>{
        return Recurring.create({ daily: recurringData.daily, weekly: recurringData.weekly, bi_weekly: recurringData.bi_weekly, monthly: recurringData.monthly, bi_monthly: recurringData.bi_monthly})
      }
      @Put(':id')
      update(@Param('id') id:number, @Body() recurringData: IRecurringDTO){
        return this.recurringsService.update(id, recurringData)
      }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.recurringsService.remove(id);
      }
    }
    