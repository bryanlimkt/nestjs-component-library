import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IAuthor } from '../../domain/models/author.interface';
import { IBook } from '../../domain/models/book.interface';
import { BaseEntity } from './base.entity';
import { Book } from './book.entity';

@Entity()
export class Author extends BaseEntity implements IAuthor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @OneToMany(() => Book, (book) => book.author, {
    cascade: true,
    eager: true,
  })
  booksPublished: IBook[];
}
