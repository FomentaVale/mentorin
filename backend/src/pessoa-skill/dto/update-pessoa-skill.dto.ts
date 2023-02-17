import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaSkillDto } from './create-pessoa-skill.dto';

export class UpdatePessoaSkillDto extends PartialType(CreatePessoaSkillDto) {}
