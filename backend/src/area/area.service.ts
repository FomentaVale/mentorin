import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AreaService {
  constructor(private readonly prisma: PrismaService){}

  async create(createAreaDto: CreateAreaDto) {
    return await this.prisma.area.create({
      data: {
        ...createAreaDto
      }
    });
  }

  async findAll() {
    return await this.prisma.area.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.area.findUnique({
      where:{
        idArea: id,
      }
    }) 
  }

  async update(id: number, data: UpdateAreaDto) {
    return await this.prisma.area.update({
      where: { idArea: id },
      data
    });
  }

  async remove(id: number) {
    await this.prisma.area.delete({
      where: { idArea: id }
    });
    return `This action removes a #${id} area`;
  }
}
