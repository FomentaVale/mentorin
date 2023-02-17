import { Module } from '@nestjs/common';
import { TipoFuncaoService } from './tipo-funcao.service';
import { TipoFuncaoController } from './tipo-funcao.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoFuncaoController],
  providers: [TipoFuncaoService, PrismaService]
})
export class TipoFuncaoModule {}
