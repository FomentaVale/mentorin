import { Test, TestingModule } from '@nestjs/testing';
import { AtuacaoService } from './atuacao.service';

describe('AtuacaoService', () => {
  let service: AtuacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtuacaoService],
    }).compile();

    service = module.get<AtuacaoService>(AtuacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
