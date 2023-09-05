import { createMock } from '@golevelup/ts-jest';
import { Book } from '../../../infrastructure/entities/book.entity';
import { BookRepository } from '../../../infrastructure/repositories/book.repository';
import { mockBook } from '../../models/mocks/book.mock';

export const mockBookRepository: BookRepository = {
  getByTitleAndDatePublished: function (
    title: string,
    publishDate: Date,
  ): Promise<Book> {
    return Promise.resolve({ ...mockBook, title, publishDate });
  },
  _repository: undefined,
  getAll: function (): Promise<Book[]> {
    return Promise.resolve([mockBook]);
  },
  get: function (id: any): Promise<Book> {
    return Promise.resolve({ ...mockBook, id });
  },
  create: function (item: Book): Promise<Book> {
    return Promise.resolve(item);
  },
  update: function (id: string, item: Book): Promise<Book> {
    return Promise.resolve({ ...mockBook, ...item, id });
  },
};
