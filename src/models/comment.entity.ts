import { DataTypes } from 'sequelize';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.entity';
import { Task } from './task.entity';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Table
export class Comment extends Model {
@Column 
comment_id: number;

@ForeignKey(() => Task)
@Column
taskId: number;

@BelongsTo (() => Task)
task: Task;

@ForeignKey(() => User)
@Column
userId: number;

@BelongsTo (() => User)
user: User;

@Column ({
    type: DataTypes.STRING(100),
  })
Content: string;

@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
