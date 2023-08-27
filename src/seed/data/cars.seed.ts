import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    brand: 'Peugeot',
    id: uuid(),
    model: '307'
  },
  {
    brand: 'Renault',
    id: uuid(),
    model: 'Clio'
  },
  {
    brand: 'VolksWagen',
    id: uuid(),
    model: 'Algo'
  },
  {
    brand: 'Topyota',
    id: uuid(),
    model: 'Etios'
  },


]