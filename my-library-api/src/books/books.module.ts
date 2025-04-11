import { Module } from '@nestjs/common';
import { BookController } from './controllers/book.controller';
import { BookService } from './application/book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BooksModule {}
