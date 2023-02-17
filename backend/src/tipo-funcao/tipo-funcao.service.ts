import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoFuncaoDto } from './dto/create-tipo-funcao.dto';
import { UpdateTipoFuncaoDto } from './dto/update-tipo-funcao.dto';

@Injectable()
export class TipoFuncaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTipoFuncaoDto: CreateTipoFuncaoDto) {
    return this.prisma.tipoFuncao.create({
      data: {
        ...createTipoFuncaoDto
      }
    });
  }

  async findAll() {
    return this.prisma.tipoFuncao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.tipoFuncao.findUnique({
      where: {
        idTipo: id
      }
    });
  }

  async update(id: number, data: UpdateTipoFuncaoDto) {
    return await this.prisma.tipoAtividade.update({
      where: {
        idTipoAtividade: id
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
