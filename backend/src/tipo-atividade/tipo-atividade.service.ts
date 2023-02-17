import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoAtividadeDto } from './dto/create-tipo-atividade.dto';
import { UpdateTipoAtividadeDto } from './dto/update-tipo-atividade.dto';

@Injectable()
export class TipoAtividadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTipoAtividadeDto: CreateTipoAtividadeDto) {
    return await this.prisma.tipoAtividade.create({
      data: {
        ...createTipoAtividadeDto,
      }
    });
  }

  async findAll() {
    return await this.prisma.tipoAtividade.findMany()
  }

   async findOne(id: number) {
    return await this.prisma.tipoAtividade.findUnique({
      where: {
        idTipoAtividade: id
      }
    });
  }

  async update(id: number, data: UpdateTipoAtividadeDto) {
    return await this.prisma.tipoAtividade.update({
      where: {
        idTipoAtividade: id,
      },
      data
    });
  }

  async remove(id: number) {
    return this.prisma.tipoAtividade.delete({
      where: {
        idTipoAtividade: id
      }
    });
  }
}
