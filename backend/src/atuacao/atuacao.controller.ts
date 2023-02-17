import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtuacaoService } from './atuacao.service';
import { CreateAtuacaoDto } from './dto/create-atuacao.dto';
import { UpdateAtuacaoDto } from './dto/update-atuacao.dto';

@Controller('atuacao')
export class AtuacaoController {
  constructor(private readonly atuacaoService: AtuacaoService) {}

  @Post()
  create(@Body() createAtuacaoDto: CreateAtuacaoDto) {
    return this.atuacaoService.create(createAtuacaoDto);
  }

  @Get()
  findAll() {
    return this.atuacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atuacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtuacaoDto: UpdateAtuacaoDto) {
    return this.atuacaoService.update(+id, updateAtuacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atuacaoService.remove(+id);
  }
}
