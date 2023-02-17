import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';

@Injectable()
export class IntegrantesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createIntegranteDto: CreateIntegranteDto) {
    return await this.prisma.integrantes.create({
      data: {
        ...createIntegranteDto
      }
    });
  }

  async findAll() {
    return this.prisma.integrantes.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.integrantes.findUnique({
      where: {
        idIntegante: id
      }
    });
  }

  async update(id: number, data: UpdateIntegranteDto) {
    return this.prisma.integrantes.update({
      where: {
        idIntegante: id
      },
      data
    });
  }

  async remove(id: number) {
    return this.prisma.integrantes.delete({
      where: {
        idIntegante: id
      }
    });
  }
}
