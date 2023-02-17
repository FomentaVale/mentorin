import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoFuncaoDto } from './create-tipo-funcao.dto';

export class UpdateTipoFuncaoDto extends PartialType(CreateTipoFuncaoDto) {}
