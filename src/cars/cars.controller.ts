import { Body, Controller, Get, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";

@Controller({})
export class CarsController{
    constructor(private readonly carService: CarsService){}

    @Get("/car")
    getAllCar(){
        return this.carService.getAllCars();
    }

    @Post()
    addCar(@Body('nombre') nombre : string){
        return this.carService.addCars(nombre);
    }
}
