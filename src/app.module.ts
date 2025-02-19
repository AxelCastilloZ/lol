import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotoModule } from './moto/moto.module';

@Module({
  imports: [MotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
