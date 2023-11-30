
    import { Table, Column, Model } from 'sequelize-typescript';

    @Table
    export class User extends Model {
    @Column
    username: string;

    @Column
    firstName: string;

    @Column
    lastName: string;
    
    @Column
    password: string;

    }
    