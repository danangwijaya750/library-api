import { Controller, Get,Post,Body,Param } from '@nestjs/common';
import { MemberService } from '../application/member.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreateMemberDto } from '../dto/create-member.dto';

@ApiTags('members')
@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.create(createMemberDto);
  }  

  @Get()
  @ApiOperation({ summary: 'Get all members with borrowed book count' })
  getAllMembers() {
    return this.memberService.getAllMembers().map(member => ({
      code: member.code,
      name: member.name,
      borrowedBooksCount: member.borrowedBooks.length,
      penaltyActive: member.penaltyUntil ? new Date() < member.penaltyUntil : false,
    }));
  }

  @Get(':code')
  @ApiOperation({ summary: 'Get member details by code' })
  @ApiParam({ name: 'code', description: 'Member code' })
  getMemberByCode(@Param('code') code: string) {
    const member = this.memberService.findMemberByCode(code);
    if (member) {
      return {
        code: member.code,
        name: member.name,
        borrowedBooks: member.borrowedBooks,
        penaltyActive: member.penaltyUntil ? new Date() < member.penaltyUntil : false,
      };
    }
    return { message: 'Member not found' };
  }
}
