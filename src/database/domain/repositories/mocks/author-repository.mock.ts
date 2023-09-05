import { Author } from '../../../infrastructure/entities/author.entity';
import { AuthorRepository } from '../../../infrastructure/repositories/author.repository';
import { mockAuthor } from '../../models/mocks/author.mock';

export const mockAuthorRepository: AuthorRepository = {
  getByNameAndDob: function (name: string, dob: Date): Promise<Author> {
    return Promise.resolve({ ...mockAuthor, name, dateOfBirth: dob });
  },
  getAll: function (): Promise<Author[]> {
    return Promise.resolve([mockAuthor]);
  },
  get: function (id: string): Promise<Author> {
    return Promise.resolve({ ...mockAuthor, id });
  },
  create: function (item: Author): Promise<Author> {
    return Promise.resolve(item);
  },
  update: function (id: string, item: Author): Promise<Author> {
    return Promise.resolve({ ...mockAuthor, ...item, id });
  },
  _repository: undefined,
};
