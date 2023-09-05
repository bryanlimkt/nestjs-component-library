import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author.entity';
import { PostgresGenericRepository } from './postgres-generic-repository';

@Injectable()
export class AuthorRepository extends PostgresGenericRepository<Author> {
  constructor(@InjectRepository(Author) _repository: Repository<Author>) {
    super(_repository);
  }
  getByNameAndDob(name: string, dob: Date) {
    return this._repository.findOneBy({ name, dateOfBirth: dob });
  }
}
