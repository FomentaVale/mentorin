import { Module } from '@nestjs/common';
import { TipoAtividadeService } from './tipo-atividade.service';
import { TipoAtividadeController } from './tipo-atividade.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoAtividadeController],
  providers: [TipoAtividadeService, PrismaService]
})
export class TipoAtividadeModule {}
