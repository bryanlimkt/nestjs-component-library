import { Injectable } from '@nestjs/common';
import { IDataService } from '../../domain/services/data.service.interface';
import { AuthorRepository } from '../repositories/author.repository';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class PostgresDataService implements IDataService {
  constructor(
    public bookRepository: BookRepository,
    public authorRepository: AuthorRepository,
  ) {}
}
