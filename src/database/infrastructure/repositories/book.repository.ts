import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { PostgresGenericRepository } from './postgres-generic-repository';

@Injectable()
export class BookRepository extends PostgresGenericRepository<Book> {
  constructor(@InjectRepository(Book) _repository: Repository<Book>) {
    super(_repository);
  }
  getByTitleAndDatePublished(title: string, publishDate: Date) {
    return this._repository.findOneBy({ title, publishDate });
  }
}
