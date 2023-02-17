import { Test, TestingModule } from '@nestjs/testing';
import { PessoaSkillService } from './pessoa-skill.service';

describe('PessoaSkillService', () => {
  let service: PessoaSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PessoaSkillService],
    }).compile();

    service = module.get<PessoaSkillService>(PessoaSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
