import { Test, TestingModule } from '@nestjs/testing';
import { AdressController } from './adress.controller';

describe('CepController', () => {
  let controller: AdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdressController],
    }).compile();

    controller = module.get<AdressController>(AdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});