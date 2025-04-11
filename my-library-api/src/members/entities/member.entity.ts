// src/members/entities/member.entity.ts
export class Member {
    id: number;
    name: string;
    email: string;
    borrowedBooks: string[];  // An array or list of borrowed books (you may change it based on your use case)
    penaltyUntil: Date;       // Date until penalty applies
    code: string;             // Some unique identifier or code for the member
    canBorrow: boolean;       // Whether the member is allowed to borrow books
  
    constructor(id: number, name: string, email: string, borrowedBooks: string[], penaltyUntil: Date, code: string, canBorrow: boolean) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.borrowedBooks = borrowedBooks;
      this.penaltyUntil = penaltyUntil;
      this.code = code;
      this.canBorrow = canBorrow;
    }
  }
  