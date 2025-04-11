import { Injectable } from '@nestjs/common';
import { Book } from '../domain/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [
    new Book('JK-45', 'Harry Potter', 'J.K Rowling', 1),
    new Book('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1),
    new Book('TW-11', 'Twilight', 'Stephenie Meyer', 1),
    new Book('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1),
    new Book('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1),
  ];

  getAllBooks(): Book[] {
    return this.books;
  }

  findBookByCode(code: string): Book {
    return this.books.find(b => b.code === code);
  }

  updateBookStock(code: string, stock: number): void {
    const book = this.findBookByCode(code);
    if (book) {
      book.stock = stock;
    }
  }
}
