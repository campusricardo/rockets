import { Test, TestingModule } from '@nestjs/testing';
import { CampersService } from './campers.service';

describe('CampersService', () => {
  let service: CampersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampersService],
    }).compile();

    service = module.get<CampersService>(CampersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
