import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from '../application/book.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @ApiOperation({ summary: 'Get all available books (not currently borrowed)' })
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':code')
  @ApiOperation({ summary: 'Get book details by code' })
  @ApiParam({ name: 'code', description: 'Book code' })
  getBookByCode(@Param('code') code: string) {
    return this.bookService.findBookByCode(code);
  }
}
