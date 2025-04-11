import { Injectable, BadRequestException } from '@nestjs/common';
import { Borrow } from '../domain/borrow.entity';
import { MemberService } from '../../members/application/member.service';
import { BookService } from '../../books/application/book.service';

@Injectable()
export class BorrowService {
  private borrows: Borrow[] = [];

  constructor(
    private readonly memberService: MemberService,
    private readonly bookService: BookService,
  ) {}

  borrowBook(memberCode: string, bookCode: string): Borrow {
    const member = this.memberService.findMemberByCode(memberCode);
    if (!member) {
      throw new BadRequestException('Member not found');
    }
    if (!member.canBorrow()) {
      throw new BadRequestException('Member cannot borrow more books or is penalized');
    }
    const book = this.bookService.findBookByCode(bookCode);
    if (!book) {
      throw new BadRequestException('Book not found');
    }
    if (!book.isAvailable()) {
      throw new BadRequestException('Book is not available');
    }
    // Update records: mark the book as borrowed and add it to the member's list
    member.borrowBook(bookCode);
    this.bookService.updateBookStock(bookCode, 0);
    const borrow = new Borrow(memberCode, bookCode, new Date());
    this.borrows.push(borrow);
    return borrow;
  }

  returnBook(memberCode: string, bookCode: string): Borrow {
    const member = this.memberService.findMemberByCode(memberCode);
    if (!member) {
      throw new BadRequestException('Member not found');
    }
    const borrow = this.borrows.find(
      b => b.memberCode === memberCode && b.bookCode === bookCode && !b.returnDate,
    );
    if (!borrow) {
      throw new BadRequestException('This book was not borrowed by the member');
    }
    borrow.returnDate = new Date();
    // Make the book available again
    this.bookService.updateBookStock(bookCode, 1);
    // Process potential penalty
    member.returnBook(bookCode, borrow.borrowDate, borrow.returnDate);
    return borrow;
  }

  getAllBorrows(): Borrow[] {
    return this.borrows;
  }
}
