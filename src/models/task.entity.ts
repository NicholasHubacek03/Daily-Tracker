
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.entity';
import { DataTypes } from 'sequelize';

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

@Column
password: string;
// FK for priority, need to comeback too it

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

}
