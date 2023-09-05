import { Injectable } from '@nestjs/common';
import { IAuthor } from './database/domain/models/author.interface';
import { IBook } from './database/domain/models/book.interface';
import { IDataService } from './database/domain/services/data.service.interface';

@Injectable()
export class AppService {
  constructor(private dataService: IDataService) {}
  saveAuthorAndBook(): string {
    const book: IBook = {
      title: 'Moby Duck',
      publishDate: new Date('2020-01-01'),
    } as IBook;
    const author: IAuthor = {
      name: 'John',
      dateOfBirth: new Date('1999-01-01'),
      booksPublished: [book],
    } as IAuthor;
    this.dataService.authorRepository.create(author);
    return 'Hello World!';
  }

  getAuthors() {
    return this.dataService.authorRepository.getAll();
  }
}
