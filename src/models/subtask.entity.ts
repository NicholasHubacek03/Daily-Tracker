import { DataTypes } from 'sequelize';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { Task } from './task.entity';

@Table
export class Subtask extends Model {

@Column
subtask: number

    @Column ({
        type: DataTypes.STRING(50),
      })
title: string

@ForeignKey(() => Task)
@Column
taskId: number;

@BelongsTo(() => Task)
task: Task;

@Column
compeleted: boolean

@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
