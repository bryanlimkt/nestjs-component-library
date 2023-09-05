import { IAuthor } from './author.interface';
import { IBase } from './base.interface';

export interface IBook extends IBase {
  id: string;
  title: string;
  author: IAuthor;
  publishDate: Date;
}
