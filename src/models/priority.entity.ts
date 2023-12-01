import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Priority extends Model {
@Column 
priority_id: number
    
@Column
name: string;

@Column
color: string;

}
