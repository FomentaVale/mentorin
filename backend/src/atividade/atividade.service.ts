import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';

@Injectable()
export class AtividadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAtividadeDto: CreateAtividadeDto) {
    return await this.prisma.atividade.create({
      data: {
        ...createAtividadeDto
      }
    });
  }

  async findAll() {
    return await this.prisma.atividade.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.atividade.findUnique({
      where: {
        idAtividade: id,
      }
    });
  }

  async update(id: number, data: UpdateAtividadeDto) {
    return await this.prisma.atividade.update({
      where: {
        idAtividade: id,
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.atividade.delete({
      where: {
        idAtividade: id
      }
    });
  }
}
