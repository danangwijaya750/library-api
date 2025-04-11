// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MembersModule } from './members/members.module';
// import { BooksModule } from './books/books.module';
// import { BorrowsModule } from './borrows/borrows.module';

// @Module({
//   imports: [MembersModule, BooksModule, BorrowsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { BorrowsModule } from './borrows/borrows.module';

@Module({
  imports: [BooksModule, MembersModule, BorrowsModule],
})
export class AppModule {}



