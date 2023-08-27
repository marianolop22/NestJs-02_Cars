import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}


  runSeed() {
    this.carsService.fillCars(CARS_SEED);
    this.brandsService.fillBrands(BRANDS_SEED);
    return {OK: true};
  }
}
