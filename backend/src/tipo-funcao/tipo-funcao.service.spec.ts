import { Test, TestingModule } from '@nestjs/testing';
import { TipoFuncaoService } from './tipo-funcao.service';

describe('TipoFuncaoService', () => {
  let service: TipoFuncaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoFuncaoService],
    }).compile();

    service = module.get<TipoFuncaoService>(TipoFuncaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
