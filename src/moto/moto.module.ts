import { Module } from '@nestjs/common';
import { MotoController } from './moto.controller';
import { MotoService } from './moto.service';

@Module({
  controllers: [MotoController],
  providers: [MotoService]
})
export class MotoModule {}
