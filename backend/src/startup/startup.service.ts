import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';

@Injectable()
export class StartupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStartupDto: CreateStartupDto) {
    return await this.prisma.startup.create({
      data:{
        ...createStartupDto,
      }
    });
  }

  async findAll() {
    return await this.prisma.startup.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.startup.findUnique({
      where: {
        idStartup: id
      }
    });
  }

  async update(id: number, data: UpdateStartupDto) {
    return await this.prisma.startup.update({
      where: {
        idStartup: id,
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.startup.delete({
      where: {
        idStartup: id
      }
    });
  }
}
