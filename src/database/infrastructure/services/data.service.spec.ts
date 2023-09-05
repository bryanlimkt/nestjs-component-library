import { createMock } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';
import { mockAuthorRepository } from '../../domain/repositories/mocks/author-repository.mock';
import { mockBookRepository } from '../../domain/repositories/mocks/book-repository.mock';
import { AuthorRepository } from '../repositories/author.repository';
import { BookRepository } from '../repositories/book.repository';
import { PostgresDataService } from './postgres-data.service';

describe('DatabaseService', () => {
  let service: PostgresDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostgresDataService,
        { provide: AuthorRepository, useValue: mockAuthorRepository },
        { provide: BookRepository, useValue: mockBookRepository },
      ],
    }).compile();

    service = module.get<PostgresDataService>(PostgresDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
