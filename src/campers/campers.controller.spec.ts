import { Test, TestingModule } from '@nestjs/testing';
import { CampersController } from './campers.controller';
import { CampersService } from './campers.service';

describe('CampersController', () => {
  let controller: CampersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampersController],
      providers: [CampersService],
    }).compile();

    controller = module.get<CampersController>(CampersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
