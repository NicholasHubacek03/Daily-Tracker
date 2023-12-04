import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from './task.entity';

@Table
export class Recurring extends Model {
@Column 
recurring_id: number    
    
@Column
daily: boolean;

@Column
weekly: boolean;

@Column
bi_weekly: boolean;

@Column
monthly: boolean;

@Column
bi_monthly: boolean;

@ForeignKey(() => Task)
@Column
taskId: number;

@BelongsTo(() => Task)
task: Task;
}
