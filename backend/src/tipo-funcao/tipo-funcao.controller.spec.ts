import { Test, TestingModule } from '@nestjs/testing';
import { TipoFuncaoController } from './tipo-funcao.controller';
import { TipoFuncaoService } from './tipo-funcao.service';

describe('TipoFuncaoController', () => {
  let controller: TipoFuncaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoFuncaoController],
      providers: [TipoFuncaoService],
    }).compile();

    controller = module.get<TipoFuncaoController>(TipoFuncaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
