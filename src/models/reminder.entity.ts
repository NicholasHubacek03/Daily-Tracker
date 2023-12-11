
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Task } from './task.entity';

@Table
export class Reminder extends Model {
@Column 
reminder_id: number

@Column({
    type: 'DATE',
    allowNull: false,
  })
  due_date: Date;

  @Column({
    type: 'DATE',
    allowNull: false,
  })
  remind_date: Date;

@ForeignKey(() => Task)
@Column
taskId: number;

@BelongsTo(() => Task)
task: Task;
}
