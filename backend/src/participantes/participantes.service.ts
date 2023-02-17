import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createParticipanteDto: CreateParticipanteDto) {
    return this.prisma.participantes.create({
      data: {
        ...createParticipanteDto
      }
    });
  }

  async findAll() {
    return this.prisma.participantes.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.participantes.findUnique({
      where: {
        idParticipantes: id
      }
    });
  }

  async update(id: number, data: UpdateParticipanteDto) {
    return await this.prisma.participantes.update({
      where: {
        idParticipantes: id
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.participantes.delete({
      where: {
        idParticipantes: id
      }
    });
  }
}
