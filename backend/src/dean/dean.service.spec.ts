import { Test, TestingModule } from '@nestjs/testing';
import { DeanService } from './dean.service';

describe('DeanService', () => {
  let service: DeanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeanService],
    }).compile();

    service = module.get<DeanService>(DeanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
