export class Member {
    public borrowedBooks: string[] = [];
    public penaltyUntil: Date = null; 
  
    constructor(
      public readonly code: string,
      public name: string,
    ) {}
  
    canBorrow(): boolean {
      const now = new Date();
      if (this.borrowedBooks.length >= 2) return false;
      if (this.penaltyUntil && now < this.penaltyUntil) return false;
      return true;
    }
  
    borrowBook(bookCode: string): void {
      this.borrowedBooks.push(bookCode);
    }
  
    returnBook(bookCode: string, borrowDate: Date, returnDate: Date): void {
      // Remove book from borrowedBooks
      this.borrowedBooks = this.borrowedBooks.filter(code => code !== bookCode);
      // If returned after 7 days, impose a 3‑day penalty
      const diffDays = (new Date(returnDate).getTime() - new Date(borrowDate).getTime()) / (1000 * 3600 * 24);
      if (diffDays > 7) {
        this.penaltyUntil = new Date(new Date(returnDate).getTime() + 3 * 24 * 3600 * 1000);
      }
    }
  }
  