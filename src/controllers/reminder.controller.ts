
    import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
    import { Reminder } from 'src/models/reminder.entity';
    import { RemindersService } from '../services/reminder.service';
import { IReminderDTO } from 'src/interfaces/general';
    
    @Controller('reminder')
    export class RemindersController {
      constructor(private readonly remindersService: RemindersService) {}
    
      @Get()
      async getAllReminders(): Promise<Reminder[]> {
        return this.remindersService.findAll();
      }
      @Get('id')
      getReminderById(@Param('id') id: number): Reminder{
        return this.remindersService.getReminderById(id);
      }
      @Post()
      async createReminder(@Body() reminderData: IReminderDTO): Promise <Reminder>{
        return Reminder.create({due_date: reminderData.due_date, remind_date: reminderData.remind_date})
      }
      @Put(':id')
      update(@Param('id') id:number, @Body() reminderData: IReminderDTO){
        return this.remindersService.updateReminder(id, reminderData)
      }
      @Delete('id')
      remove(@Param('id') id: number){
        return this.remindersService.remove(id);
      }
    }
    