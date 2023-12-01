import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class taskTag extends Model {
@Column
name: string;

}
