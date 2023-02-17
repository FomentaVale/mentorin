import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';

@Injectable()
export class FuncaoService {
  constructor(private prisma: PrismaService){}

 async create(createFuncaoDto: CreateFuncaoDto) {
    return await this.prisma.funcao.create({
      data: {
        ...createFuncaoDto
      }
    });
  }

  async findAll() {
    return await this.prisma.funcao.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.funcao.findUnique({
      where:{
      idFuncao: id
    }});
  }

  async update(id: number, data: UpdateFuncaoDto) {
    return await this.prisma.funcao.update({
      where: {
        idFuncao: id,
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.funcao.delete({
      where: {
        idFuncao: id
      }
    });
  }
}
