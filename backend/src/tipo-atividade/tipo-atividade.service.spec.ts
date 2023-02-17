import { Test, TestingModule } from '@nestjs/testing';
import { TipoAtividadeService } from './tipo-atividade.service';

describe('TipoAtividadeService', () => {
  let service: TipoAtividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoAtividadeService],
    }).compile();

    service = module.get<TipoAtividadeService>(TipoAtividadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
