
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Tag extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  tagId: number;

  @Column
  tag: string;
}