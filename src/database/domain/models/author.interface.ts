import { IBase } from './base.interface';
import { IBook } from './book.interface';

export interface IAuthor extends IBase {
  id: string;
  name: string;
  dateOfBirth: Date;
  booksPublished: IBook[];
}
