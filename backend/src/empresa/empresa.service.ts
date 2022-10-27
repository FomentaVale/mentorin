import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    return await this.prisma.empresa.create({
      data: {
        ...createEmpresaDto
      }
    });
  }

  async findAll() {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.empresa.findUnique({
      where: {
        idEmpresa: id
      }
    });
  }

  async update(id: number, data: UpdateEmpresaDto) {
    return await this.prisma.empresa.update({
      where: {
        idEmpresa: id,
      },
      data
    });
  }

  async remove(id: number) {
    return await this.prisma.empresa.delete({
      where: {
        idEmpresa: id
      }
    });
  }
}

