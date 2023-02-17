import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAtuacaoDto } from './dto/create-atuacao.dto';
import { UpdateAtuacaoDto } from './dto/update-atuacao.dto';

@Injectable()
export class AtuacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAtuacaoDto: CreateAtuacaoDto) {
    return await this.prisma.atuacao.create({
      data: {
        ...createAtuacaoDto
      }
    });
  }

  async findAll() {
    return await this.prisma.atuacao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.atuacao.findUnique({where:{
      idAtuacao: id,
    }}); 
  }

  async update(id: number, data: UpdateAtuacaoDto) {
    return this.prisma.atuacao.update({
      where: {
        idAtuacao: id
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.atuacao.delete({
      where: {
        idAtuacao: id
      }
    });
  }
}
