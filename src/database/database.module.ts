import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm-postgres-config';
import { IDataService } from './domain/services/data.service.interface';
import { Author } from './infrastructure/entities/author.entity';
import { Book } from './infrastructure/entities/book.entity';
import { AuthorRepository } from './infrastructure/repositories/author.repository';
import { BookRepository } from './infrastructure/repositories/book.repository';
import { PostgresDataService } from './infrastructure/services/postgres-data.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([Book, Author]),
  ],
  providers: [
    { provide: IDataService, useClass: PostgresDataService },
    AuthorRepository,
    BookRepository,
  ],
  exports: [IDataService],
})
export class DatabaseModule {}
