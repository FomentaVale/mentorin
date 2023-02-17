import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaInternaController } from './categoria-interna.controller';
import { CategoriaInternaService } from './categoria-interna.service';

describe('CategoriaInternaController', () => {
  let controller: CategoriaInternaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaInternaController],
      providers: [CategoriaInternaService],
    }).compile();

    controller = module.get<CategoriaInternaController>(CategoriaInternaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
