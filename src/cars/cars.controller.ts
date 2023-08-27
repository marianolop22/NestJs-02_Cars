import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
    ) {}

  @Get()
  getCars() {
    return this.carsService.cars;
  }

  @Get(':id')
  findOneById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById( id );
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.updateCar(id, updateCarDto)
  }

  @Delete(':id')
  deleteCar (@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }


}
