import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Recurring extends Model {
@Column 
recurring_id: number    
    
@Column
daily: boolean;

@Column
weekly: boolean;

@Column
bi_weekly: boolean;

@Column
monthly: boolean;

@Column
bi_monthly: boolean;
}
