import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {

  private _cars: Car[] = [
    {
      id: uuid(),
      brand: 'Peugeot',
      model: '307',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Etios',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'CRV',
    }
  ];

  public get cars(): Car[] {
    return this._cars;
  }

  private set cars(car: Car){
    this._cars.push(car);
  }

  findOneById(id: string): Car {
    const car = this.cars.find ( car => car.id === id );
    if (car) {
      return car;
    }
    throw new NotFoundException('no existe el id');
  }

  createCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars = car;
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    const index = this.cars.findIndex( car => car.id === id);
    if (index > -1) {
      this.cars[index] = {
        ...this.cars[index],
        ...updateCarDto,
        id,
      }
      return this.cars[index];
    }
    throw new NotFoundException('no existe el id');
  }

  deleteCar(id: string) {
    const index = this.cars.findIndex( car => car.id === id);
    if (index === -1) {
      throw new NotFoundException('no existe el id');
    }
    this.cars.splice(index, 1);
  }

  fillCars( cars: Car[]) {
    this._cars = cars;
  }

}
