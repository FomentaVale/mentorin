import { Module } from '@nestjs/common';
import { CategoriaInternaService } from './categoria-interna.service';
import { CategoriaInternaController } from './categoria-interna.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoriaInternaController],
  providers: [CategoriaInternaService, PrismaService]
})
export class CategoriaInternaModule {}
