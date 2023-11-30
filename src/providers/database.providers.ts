import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/models/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'db',
        port: Number(process.env.DATABASE_PORT) || 5432,
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '',
        database: process.env.POSTGRES_NAME || 'postgres',
        timezone: 'utc',
      });
      sequelize.addModels([
        User
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];