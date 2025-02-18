import { Injectable } from "@nestjs/common";

@Injectable()
export class CarsService{
    private cars = ['Nissan', 'Toyota', 'Mitsubishi']

    
    getAllCars(){
        return this.cars;
    }
   
    addCars(car: string){
        this.cars.push(car);
        return `Car ${car} se agrego correctamente`;

    }


}