import { mockAuthorRepository } from '../../repositories/mocks/author-repository.mock';
import { mockBookRepository } from '../../repositories/mocks/book-repository.mock';
import { IDataService } from '../data.service.interface';

export const mockDataService: IDataService = {
  bookRepository: mockBookRepository,
  authorRepository: mockAuthorRepository,
};
