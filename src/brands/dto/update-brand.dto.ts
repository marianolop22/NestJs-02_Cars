import { IsNotEmpty, IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {
export class UpdateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
