import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Task } from './task.entity';
import { Tag } from './tag.entity';

@Table
export class TaskTag extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @BelongsTo(() => Task)
  task: Task;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @BelongsTo(() => Tag)
  tag: Tag;
}