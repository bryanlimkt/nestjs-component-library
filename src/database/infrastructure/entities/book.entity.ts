import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IAuthor } from '../../domain/models/author.interface';
import { IBook } from '../../domain/models/book.interface';
import { Author } from './author.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Book extends BaseEntity implements IBook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.booksPublished, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  author: IAuthor;

  // use timestamptz if you want time and tz. specific to postgres. Change Accordingly
  @Column({ nullable: true, type: 'date' })
  publishDate: Date;
}
