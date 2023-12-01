
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Reminder extends Model {
@Column 
reminder_id: number

@Column
username: string;

@Column
due_date: string;

@Column
lastName: string;

@Column
password: string;

}
