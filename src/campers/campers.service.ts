import { Injectable } from '@nestjs/common';
import { CreateCamperDto } from './dto/create-camper.dto';
import { UpdateCamperDto } from './dto/update-camper.dto';

@Injectable()
export class CampersService {
  create(createCamperDto: CreateCamperDto) {
    return 'This action adds a new camper';
  }

  findAll() {
    return `This action returns all campers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} camper`;
  }

  update(id: number, updateCamperDto: UpdateCamperDto) {
    return `This action updates a #${id} camper`;
  }

  remove(id: number) {
    return `This action removes a #${id} camper`;
  }
}
