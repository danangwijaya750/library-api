export class Borrow {
    constructor(
      public readonly memberCode: string,
      public readonly bookCode: string,
      public readonly borrowDate: Date,
      public returnDate?: Date,
    ) {}
  }
  