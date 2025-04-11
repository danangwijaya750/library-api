// test/member.service.spec.ts
import { MemberService } from '../src/members/application/member.service';
import { Member } from '../src/members/domain/member.entity';

describe('MemberService', () => {
  let memberService: MemberService;

  beforeEach(() => {
    // Create a fresh instance of MemberService before each test.
    memberService = new MemberService();
  });

  it('should return all members', () => {
    const members = memberService.getAllMembers();
    expect(members).toBeDefined();
    expect(members.length).toBeGreaterThan(0);
  });

  it('should not allow borrowing more than 2 books', () => {
    // Get a member and simulate borrowing two books
    const member = memberService.findMemberByCode('M001');
    expect(member).toBeDefined();

    // Borrow two books
    member.borrowBook('B1');
    member.borrowBook('B2');

    // After borrowing two books, the member should no longer be allowed to borrow more.
    expect(member.canBorrow()).toBe(false);
  });

  it('should allow borrowing if less than 2 books and no penalty', () => {
    // Create a new member instance
    const member = new Member('M004', 'Test Member');

    // Initially the member should be allowed to borrow a book.
    expect(member.canBorrow()).toBe(true);
  });

  it('should impose penalty if the book is returned after more than 7 days', () => {
    // Create a new member instance for testing penalty enforcement
    const member = new Member('M005', 'Penalty Test');
    const bookCode = 'B1';

    // Simulate borrowing a book
    member.borrowBook(bookCode);

    // Simulate borrowing happening 8 days ago.
    const borrowDate = new Date();
    borrowDate.setDate(borrowDate.getDate() - 8);

    // Simulate a return today
    const returnDate = new Date();

    // Return the book which should impose a penalty (3 days)
    member.returnBook(bookCode, borrowDate, returnDate);

    // Verify that penalty is active
    expect(member.penaltyUntil).toBeDefined();
    expect(new Date() < member.penaltyUntil).toBe(true);

    // Member should not be allowed to borrow while penalty is active.
    expect(member.canBorrow()).toBe(false);
  });
});
