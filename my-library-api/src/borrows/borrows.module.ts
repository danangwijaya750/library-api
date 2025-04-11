import { Module } from '@nestjs/common';
import { BorrowController } from './controllers/borrow.controller';
import { BorrowService } from './application/borrow.service';
import { BooksModule } from '../books/books.module';
import { MembersModule } from '../members/members.module';

@Module({
  imports: [BooksModule, MembersModule],
  controllers: [BorrowController],
  providers: [BorrowService],
})
export class BorrowsModule {}
