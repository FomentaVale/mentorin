import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoAtividadeService } from './tipo-atividade.service';
import { CreateTipoAtividadeDto } from './dto/create-tipo-atividade.dto';
import { UpdateTipoAtividadeDto } from './dto/update-tipo-atividade.dto';

@Controller('tipo-atividade')
export class TipoAtividadeController {
  constructor(private readonly tipoAtividadeService: TipoAtividadeService) {}

  @Post()
  create(@Body() createTipoAtividadeDto: CreateTipoAtividadeDto) {
    return this.tipoAtividadeService.create(createTipoAtividadeDto);
  }

  @Get()
  findAll() {
    return this.tipoAtividadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoAtividadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoAtividadeDto: UpdateTipoAtividadeDto) {
    return this.tipoAtividadeService.update(+id, updateTipoAtividadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoAtividadeService.remove(+id);
  }
}
