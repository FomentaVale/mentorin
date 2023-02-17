import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaInternaDto } from './dto/create-categoria-interna.dto';
import { UpdateCategoriaInternaDto } from './dto/update-categoria-interna.dto';

@Injectable()
export class CategoriaInternaService {
  constructor (private readonly prisma: PrismaService) {}

  async create(createCategoriaInternaDto: CreateCategoriaInternaDto) {
    return await this.prisma.categoriaInterna.create({
      data: {
      ...createCategoriaInternaDto
      }
    });
  }

  async findAll() {
    return await this.prisma.categoriaInterna.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.categoriaInterna.findUnique({
      where: {
        idCategoria: id
      }
    });
  }

  async update(id: number, data: UpdateCategoriaInternaDto) {
    return this.prisma.categoriaInterna.update({
      where: {
        idCategoria: id,
      },
      data
    });
  }

  async remove(id: number) {
    return this.prisma.categoriaInterna.delete({
      where: {
        idCategoria: id
      }
    });
  }
}
