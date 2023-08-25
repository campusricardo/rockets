import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampersService } from './campers.service';
import { CreateCamperDto } from './dto/create-camper.dto';
import { UpdateCamperDto } from './dto/update-camper.dto';

@Controller('campers')
export class CampersController {
  constructor(private readonly campersService: CampersService) {}

  @Post()
  create(@Body() createCamperDto: CreateCamperDto) {
    return this.campersService.create(createCamperDto);
  }

  @Get()
  findAll() {
    return this.campersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCamperDto: UpdateCamperDto) {
    return this.campersService.update(+id, updateCamperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campersService.remove(+id);
  }
}
