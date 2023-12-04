
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from './task.entity';

@Table
export class Reminder extends Model {
@Column 
reminder_id: number

@Column
due_date: string;
// DATE!!!
@Column
remind_date: string;
// DATE!!!

@ForeignKey(() => Task)
@Column
taskId: number;

@BelongsTo(() => Task)
task: Task;
}
