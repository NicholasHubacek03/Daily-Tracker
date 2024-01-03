import { Injectable, Inject } from '@nestjs/common';
import { Attributes, ModelStatic, WhereOptions, CreateOptions } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { IUserDTO } from 'src/interfaces/general';

@Injectable()
export abstract class BaseService<T extends Model<T>> {
  constructor(
    @Inject('MODEL_TOKEN') private model: ModelStatic<T>,
  ) {}

  async findOne(id: number): Promise<T> {
    return this.model.findOne<T>({
      where: { id }as WhereOptions<Attributes<T>>,
    });
  }

  async findAll(): Promise<T[]> {
    return this.model.findAll<T>();
  }

  async remove(id: number): Promise<void> {
    const record = await this.findOne(id);
    await record.destroy();
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    const record = await this.findOne(id);
    return record.update(data);
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create<T>(data as unknown as CreateOptions<T>);
  }
}
