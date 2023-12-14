
    import { DataTypes } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Task } from './task.entity';
import { Comment } from './comment.entity';

    @Table ({
      timestamps: true,
      paranoid: true,
    })
    export class User extends Model {
    @Column 
    user_id: number     

    @Column({
        type: DataTypes.STRING(55),
      })
    username: string;

    @Column({
        type: DataTypes.STRING(55),
      })
    firstName: string;

    @Column({
        type: DataTypes.STRING(55),
      })
    lastName: string;
    
    @Column({
        type: DataTypes.STRING(255),
      })
    password: string;

    @HasMany(() => Task)
    tasks: Task[];
        
    @HasMany(() => Comment)
    comments: Comment[];
    }
    