//import { ApiModelProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

  @IsOptional()
  @IsUUID()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly brand?: string;
  
  @IsOptional()
  @IsString()
  @MinLength(3)
  readonly model?: string;

}
