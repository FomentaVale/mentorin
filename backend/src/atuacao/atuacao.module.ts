import { Module } from '@nestjs/common';
import { AtuacaoService } from './atuacao.service';
import { AtuacaoController } from './atuacao.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AtuacaoController],
  providers: [AtuacaoService, PrismaService]
})
export class AtuacaoModule {}
