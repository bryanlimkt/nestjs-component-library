import { IBook } from '../book.interface';
import { mockAuthor } from './author.mock';

export const mockBook: IBook = {
  id: 'bookId123',
  title: 'Moby Dike',
  author: mockAuthor,
  publishDate: new Date('2020-01-01'),
  createdAt: new Date('2023-01-01'),
  updatedAt: new Date('2023-01-01'),
};
