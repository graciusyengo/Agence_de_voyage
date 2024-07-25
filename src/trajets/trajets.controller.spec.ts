import { Test, TestingModule } from '@nestjs/testing';
import { TrajetsController } from './trajets.controller';
import { TrajetsService } from './trajets.service';

describe('TrajetsController', () => {
  let controller: TrajetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrajetsController],
      providers: [TrajetsService],
    }).compile();

    controller = module.get<TrajetsController>(TrajetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
