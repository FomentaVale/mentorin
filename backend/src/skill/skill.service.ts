import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createSkillDto: CreateSkillDto) {
    return this.prisma.skill.create({
      data: {
        ...createSkillDto
      }
    });
  }

  async findAll() {
    return await this.prisma.skill.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.skill.findUnique({
      where: {
        idSkill: id
      }
    });
  }

  async update(id: number, data: UpdateSkillDto) {
    return await this.prisma.skill.update({
      where: {
        idSkill: id,
      }, data
    });
  }

  async remove(id: number) {
    return this.prisma.skill.delete({
      where: {
        idSkill: id
      }
    });
  }
}
