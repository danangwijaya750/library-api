import { Module } from '@nestjs/common';
import { MemberController } from './controllers/member.controller';
import { MemberService } from './application/member.service';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MembersModule {}
