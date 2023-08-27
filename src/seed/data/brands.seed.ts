
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    name: 'Peugeot',
    id: uuid(),
    createdAt: new Date().getTime()
  },
  {
    name: 'Renault',
    id: uuid(),
    createdAt: new Date().getTime(),
  },
  {
    name: 'VolksWagen',
    id: uuid(),
    createdAt: new Date().getTime(),
  },
  {
    name: 'Topyota',
    id: uuid(),
    createdAt: new Date().getTime(),
  }
]