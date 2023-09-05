import { IAuthor } from '../author.interface';
import { mockBook } from './book.mock';

export const mockAuthor: IAuthor = {
  id: 'authorId123',
  name: 'John',
  dateOfBirth: new Date('2000-01-01'),
  booksPublished: [mockBook],
  createdAt: new Date('2010-01-01'),
  updatedAt: new Date('2010-01-01'),
};
