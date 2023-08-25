import { PartialType } from '@nestjs/mapped-types';
import { CreateCamperDto } from './create-camper.dto';

export class UpdateCamperDto extends PartialType(CreateCamperDto) {}
