import { Table, Column, Model } from 'sequelize-typescript';
import { Timestamp } from 'typeorm';

@Table
export class subsTasks extends Model {

@Column
title: string

@Column
compeleted: string

@Column
createdAt?: Timestamp;

@Column
updatedAt?: Timestamp;
}
