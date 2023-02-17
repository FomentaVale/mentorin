import { Test, TestingModule } from '@nestjs/testing';
import { PessoaSkillController } from './pessoa-skill.controller';
import { PessoaSkillService } from './pessoa-skill.service';

describe('PessoaSkillController', () => {
  let controller: PessoaSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoaSkillController],
      providers: [PessoaSkillService],
    }).compile();

    controller = module.get<PessoaSkillController>(PessoaSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
