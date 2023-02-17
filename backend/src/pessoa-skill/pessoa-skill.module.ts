import { Module } from '@nestjs/common';
import { PessoaSkillService } from './pessoa-skill.service';
import { PessoaSkillController } from './pessoa-skill.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PessoaSkillController],
  providers: [PessoaSkillService, PrismaService]
})
export class PessoaSkillModule {}
