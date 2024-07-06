import { Test, TestingModule } from '@nestjs/testing';
import { AdressService } from './adress.service';

describe('CepService', () => {
  let service: AdressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdressService],
    }).compile();

    service = module.get<AdressService>(AdressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
