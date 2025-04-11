import { Injectable } from '@nestjs/common';
// import { Member } from '../domain/member.entity';
import { CreateMemberDto } from '../dto/create-member.dto';
import { Member } from '../entities/member.entity';

@Injectable()
export class MemberService {
//   private members: Member[] = [
//     new Member('M001', 'Angga'),
//     new Member('M002', 'Ferry'),
//     new Member('M003', 'Putri'),
//   ];
   private members: Member[] = [];

  create(createMemberDto: CreateMemberDto) {
    // Set default values for the properties not provided by the DTO
    const newMember = new Member(
      this.members.length + 1,  // Simple ID generation
      createMemberDto.name,
      createMemberDto.email,
      [],                      // Empty list of borrowed books
      new Date(),               // Set penaltyUntil as current date (this can be adjusted based on your logic)
      'some-unique-code',       // Some default code, or generate one
      true                      // By default, allow borrowing
    );

    this.members.push(newMember);
    return newMember;
  }

  getAllMembers(): Member[] {
    return this.members;
  }

  findMemberByCode(code: string): Member {
    return this.members.find(m => m.code === code);
  }
}
