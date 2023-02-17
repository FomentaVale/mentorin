import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PessoaSkillService } from './pessoa-skill.service';
import { CreatePessoaSkillDto } from './dto/create-pessoa-skill.dto';
import { UpdatePessoaSkillDto } from './dto/update-pessoa-skill.dto';

@Controller('pessoa-skill')
export class PessoaSkillController {
  constructor(private readonly pessoaSkillService: PessoaSkillService) {}

  @Post()
  create(@Body() createPessoaSkillDto: CreatePessoaSkillDto) {
    return this.pessoaSkillService.create(createPessoaSkillDto);
  }

  @Get()
  findAll() {
    return this.pessoaSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaSkillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaSkillDto: UpdatePessoaSkillDto) {
    return this.pessoaSkillService.update(+id, updatePessoaSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaSkillService.remove(+id);
  }
}
