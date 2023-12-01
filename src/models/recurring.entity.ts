import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Recurring extends Model {
@Column 
recurring_id: number    
    
@Column
daily: string;

@Column
weekly: string;

@Column
bi_weekly: string;

@Column
monthly: string;

@Column
bi_monthly: string;
}
