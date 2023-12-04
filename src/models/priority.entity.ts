import { DataTypes } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Task } from './task.entity';

@Table
export class Priority extends Model {
@Column 
priority_id: number
    
@Column ({
    type: DataTypes.STRING(100),
  })
name: string;

@Column ({
    type: DataTypes.STRING(100),
  })
color: string;


@HasMany(() => Task)
tasks: Task[];
}
