
    import { Table, Column, Model } from 'sequelize-typescript';

    @Table
    export class User extends Model {
    @Column 
    user_id: number     

    @Column
    username: string;

    @Column
    firstName: string;

    @Column
    lastName: string;
    
    @Column
    password: string;
        
    }
    