import { PartialType } from '@nestjs/mapped-types';
import { CreateAtuacaoDto } from './create-atuacao.dto';

export class UpdateAtuacaoDto extends PartialType(CreateAtuacaoDto) {}
