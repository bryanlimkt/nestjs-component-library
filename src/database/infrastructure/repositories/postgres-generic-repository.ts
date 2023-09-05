import { Repository } from 'typeorm';
import { IGenericRepository } from '../../domain/repositories/generic-repository';

export class PostgresGenericRepository<T> implements IGenericRepository<T> {
  _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: any): Promise<T> {
    return this._repository.findOneBy(id);
  }

  create(item: T): Promise<T> {
    return this._repository.save(item);
  }

  async update(id: string, item: T) {
    const existingItem: T = await this.get(id);
    return this._repository.save({ ...existingItem, ...item });
  }
}
