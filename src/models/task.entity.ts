
import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './user.entity';
import { DataTypes } from 'sequelize';
import { Comment } from './comment.entity';
import { Priority } from './priority.entity';
import { Subtask } from './subtask.entity';
import { Reminder } from './reminder.entity';
import { Recurring } from './recurring.entity';

@Table
export class Task extends Model {

@Column 
task_id: number

 @ForeignKey(() => User)
  @Column
  userID: number;
  
  @BelongsTo(() => User)
  user: User;

@Column ({
    type: DataTypes.STRING(55),
  })
title: string;

@Column ({
    type: DataTypes.STRING(55),
  })
description: string;

@Column ({
    type: DataTypes.DATE(),
  })
due_date: string;

@ForeignKey(() => Priority)
@Column
taskId: number;

@BelongsTo(() => Priority)
priority: Priority;

@Column ({
    type: DataTypes.BOOLEAN(),
  })
completed: string;

@Column ({
    type: DataTypes.INTEGER(),
  })
progess: string;

@Column
recurring: string;
// recurring.id, need to come back to it

createdAt?: any;

updatedAt?: any;

@HasMany(() => Comment)
comments: Comment[];

@HasMany(() => Subtask)
substasks: Subtask[];

@HasMany(() => Reminder)
reminders: Reminder[];

@HasMany(() => Recurring)
recurrings: Recurring[];
}
