import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoFuncaoService } from './tipo-funcao.service';
import { CreateTipoFuncaoDto } from './dto/create-tipo-funcao.dto';
import { UpdateTipoFuncaoDto } from './dto/update-tipo-funcao.dto';

@Controller('tipo-funcao')
export class TipoFuncaoController {
  constructor(private readonly tipoFuncaoService: TipoFuncaoService) {}

  @Post()
  create(@Body() createTipoFuncaoDto: CreateTipoFuncaoDto) {
    return this.tipoFuncaoService.create(createTipoFuncaoDto);
  }

  @Get()
  findAll() {
    return this.tipoFuncaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoFuncaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoFuncaoDto: UpdateTipoFuncaoDto) {
    return this.tipoFuncaoService.update(+id, updateTipoFuncaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoFuncaoService.remove(+id);
  }
}
