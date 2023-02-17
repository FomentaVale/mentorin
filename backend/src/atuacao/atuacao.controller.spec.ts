import { Test, TestingModule } from '@nestjs/testing';
import { AtuacaoController } from './atuacao.controller';
import { AtuacaoService } from './atuacao.service';

describe('AtuacaoController', () => {
  let controller: AtuacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtuacaoController],
      providers: [AtuacaoService],
    }).compile();

    controller = module.get<AtuacaoController>(AtuacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
