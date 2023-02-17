import { Module } from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { IntegrantesController } from './integrantes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IntegrantesController],
  providers: [IntegrantesService, PrismaService]
})
export class IntegrantesModule {}
