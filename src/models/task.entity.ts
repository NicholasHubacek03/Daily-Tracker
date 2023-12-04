import { Table, Column, Model, ForeignKey, BelongsTo, HasMany, BelongsToMany, PrimaryKey } from 'sequelize-typescript';
import { User } from './user.entity';
import { DataTypes } from 'sequelize';
import { Comment } from './comment.entity';
import { Priority } from './priority.entity';
import { Subtask } from './subtask.entity';
import { Reminder } from './reminder.entity';
import { Recurring } from './recurring.entity';
import { Tag } from './tag.entity';
import { TaskTag } from './tasktag.entity';

@Table
export class Task extends Model {
  @PrimaryKey
  @Column
  task_id: number;

  @ForeignKey(() => User)
  @Column
  userID: number;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataTypes.STRING(55),
  })
  title: string;

  @Column({
    type: DataTypes.STRING(55),
  })
  description: string;

  @Column({
    type: DataTypes.DATE(),
  })
  due_date: string;

  @ForeignKey(() => Priority)
  @Column
  priorityId: number;

  @BelongsTo(() => Priority)
  priority: Priority;

  @Column({
    type: DataTypes.BOOLEAN(),
  })
  completed: string;

  @Column({
    type: DataTypes.INTEGER(),
  })
  progess: string;

  @Column
  recurring: string;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Subtask)
  substasks: Subtask[];

  @HasMany(() => Reminder)
  reminders: Reminder[];

  @HasMany(() => Recurring)
  recurrings: Recurring[];

  @BelongsToMany(() => Tag, () => TaskTag, 'taskId', 'tagId')
  tags: Tag[];
}