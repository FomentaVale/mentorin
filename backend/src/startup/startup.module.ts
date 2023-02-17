import { Module } from '@nestjs/common';
import { StartupService } from './startup.service';
import { StartupController } from './startup.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [StartupController],
  providers: [StartupService, PrismaService]
})
export class StartupModule {}
