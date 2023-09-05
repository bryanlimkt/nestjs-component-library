import { AuthorRepository } from '../../infrastructure/repositories/author.repository';
import { BookRepository } from '../../infrastructure/repositories/book.repository';

export abstract class IDataService {
  abstract bookRepository: BookRepository;
  abstract authorRepository: AuthorRepository;
}
