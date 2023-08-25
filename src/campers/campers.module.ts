import { Module } from '@nestjs/common';
import { CampersService } from './campers.service';
import { CampersController } from './campers.controller';

@Module({
  controllers: [CampersController],
  providers: [CampersService],
})
export class CampersModule {}
