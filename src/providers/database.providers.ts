import { Sequelize } from 'sequelize-typescript';
import { Comment } from 'src/models/comment.entity';
import { Priority } from 'src/models/priority.entity';
import { Recurring } from 'src/models/recurring.entity';
import { Reminder } from 'src/models/reminder.entity';
import { Subtask } from 'src/models/subtask.entity';
import { Tag } from 'src/models/tag.entity';
import { Task } from 'src/models/task.entity';
import { TaskTag } from 'src/models/tasktag.entity';
import { User } from 'src/models/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      console.log(process.env)
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.DATABASE_PORT) || 5432,
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'trackerPassword',
        database: process.env.POSTGRES_NAME || 'tracker_db',
        timezone: 'utc',
      });
      sequelize.addModels([
        User,
        Task,
        Comment,
        Priority,
        Subtask,
        Reminder,
        Recurring,
        Tag,
        TaskTag
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];