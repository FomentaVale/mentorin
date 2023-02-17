import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaInternaService } from './categoria-interna.service';

describe('CategoriaInternaService', () => {
  let service: CategoriaInternaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaInternaService],
    }).compile();

    service = module.get<CategoriaInternaService>(CategoriaInternaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
