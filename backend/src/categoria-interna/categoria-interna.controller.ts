import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaInternaService } from './categoria-interna.service';
import { CreateCategoriaInternaDto } from './dto/create-categoria-interna.dto';
import { UpdateCategoriaInternaDto } from './dto/update-categoria-interna.dto';

@Controller('categoria-interna')
export class CategoriaInternaController {
  constructor(private readonly categoriaInternaService: CategoriaInternaService) {}

  @Post()
  create(@Body() createCategoriaInternaDto: CreateCategoriaInternaDto) {
    return this.categoriaInternaService.create(createCategoriaInternaDto);
  }

  @Get()
  findAll() {
    return this.categoriaInternaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaInternaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaInternaDto: UpdateCategoriaInternaDto) {
    return this.categoriaInternaService.update(+id, updateCategoriaInternaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaInternaService.remove(+id);
  }
}
