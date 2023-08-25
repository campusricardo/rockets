import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampersModule } from './campers/campers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [CampersModule, MongooseModule.forRoot('mongodb+srv://astronautasUser:12345@clusterastronautas.5anmdzh.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
