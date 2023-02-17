import { Test, TestingModule } from '@nestjs/testing';
import { TipoAtividadeController } from './tipo-atividade.controller';
import { TipoAtividadeService } from './tipo-atividade.service';

describe('TipoAtividadeController', () => {
  let controller: TipoAtividadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoAtividadeController],
      providers: [TipoAtividadeService],
    }).compile();

    controller = module.get<TipoAtividadeController>(TipoAtividadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
