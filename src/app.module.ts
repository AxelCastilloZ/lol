import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotoModule } from './moto/moto.module';
import { CarsModule } from "./cars/cars.module";

@Module({
  imports: [CarsModule, MotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
