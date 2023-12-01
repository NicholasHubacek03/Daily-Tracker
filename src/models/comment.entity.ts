import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Comment extends Model {
@Column 
comment_id: number
    
@Column
username: string;

@Column
firstName: string;

@Column
Content: string;

@Column
createdAt: string;

@Column
updatedAt?: any;
}
