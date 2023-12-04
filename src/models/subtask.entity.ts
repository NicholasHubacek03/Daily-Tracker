import { DataTypes } from 'sequelize';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Timestamp } from 'typeorm';
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

// @Column
// createdAt?: any;

// @Column
// updatedAt?: any;
// need to come back and fix
}
