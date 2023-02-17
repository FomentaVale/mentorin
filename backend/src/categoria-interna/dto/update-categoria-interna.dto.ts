import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaInternaDto } from './create-categoria-interna.dto';

export class UpdateCategoriaInternaDto extends PartialType(CreateCategoriaInternaDto) {}
