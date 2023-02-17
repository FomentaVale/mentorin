import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaSkillDto } from './dto/create-pessoa-skill.dto';
import { UpdatePessoaSkillDto } from './dto/update-pessoa-skill.dto';

@Injectable()
export class PessoaSkillService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPessoaSkillDto: CreatePessoaSkillDto) {
   return await this.prisma.pessoaSkill.create({
    data:{
      ...createPessoaSkillDto,
    }
   });
  }

  async findAll() {
    return await this.prisma.pessoaSkill.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pessoaSkill.findUnique({
      where: {
        idPessoaSkill: id
      }
    });
  }

  async update(id: number, data: UpdatePessoaSkillDto) {
    return await this.prisma.pessoaSkill.update({
      where: {
        idPessoaSkill: id,
      },
      data
    });
  }

  async remove(id: number) {
    return this.prisma.pessoaSkill.delete({where:{
      idPessoaSkill: id
    }});
  }
}
