import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Astronauta, AstronautaSchema } from './schemas/astronautas.schema';
import { AstronautasService } from './astronautas.service';
import { AstronautasController } from './astronautas.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Astronauta.name,
            schema: AstronautaSchema
        }])
    ],
    providers: [AstronautasService],
    controllers: [AstronautasController]
})

export class AstronautasModule {}