//import { ApiModelProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCarDto {

  @IsNotEmpty()
  @IsString({message: 'Manda bien los datos'})
  readonly brand: string;
  
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly model: string;

}
