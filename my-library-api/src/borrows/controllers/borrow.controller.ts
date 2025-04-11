import { Controller, Post, Body, Get } from '@nestjs/common';
import { BorrowService } from '../application/borrow.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

class BorrowDto {
  memberCode: string;
  bookCode: string;
}

@ApiTags('borrows')
@Controller('borrows')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post('borrow')
  @ApiOperation({ summary: 'Member borrows a book' })
  borrow(@Body() borrowDto: BorrowDto) {
    return this.borrowService.borrowBook(borrowDto.memberCode, borrowDto.bookCode);
  }

  @Post('return')
  @ApiOperation({ summary: 'Member returns a book' })
  returnBook(@Body() borrowDto: BorrowDto) {
    return this.borrowService.returnBook(borrowDto.memberCode, borrowDto.bookCode);
  }

  @Get()
  @ApiOperation({ summary: 'Get all borrow records' })
  getAllBorrows() {
    return this.borrowService.getAllBorrows();
  }
}
