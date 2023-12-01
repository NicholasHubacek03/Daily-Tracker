
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Task extends Model {
@Column
userID: string;

@Column
title: string;

@Column
description: string;

@Column
due_date: string;

@Column
password: string;
// FK for priority

@Column
completed: string;

@Column
progess: string;

@Column
recurring: string;
// recurring.id

createdAt?: any;

updatedAt?: any;

}
