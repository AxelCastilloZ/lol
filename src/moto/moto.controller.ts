import { Controller, Get, Post, Body } from '@nestjs/common';
import { MotoService } from './moto.service';

@Controller('motos') 
export class MotoController {
  constructor(private readonly motoService: MotoService) {}

  @Get()
  getAllMotos() {
    return this.motoService.getAllMotos();
  }

  @Post()
  addMoto(@Body('nombre') nombre: string) {
    return this.motoService.addMoto(nombre);
  }
}
