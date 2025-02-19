import { Injectable } from '@nestjs/common';

@Injectable()
export class MotoService {
  private motos = ['Yamaha', 'Honda', 'Ducati'];

  getAllMotos() {
    return this.motos;
  }

  addMoto(moto: string) {
    this.motos.push(moto);
    return `Moto ${moto} agregada correctamente`;
  }
    }


    