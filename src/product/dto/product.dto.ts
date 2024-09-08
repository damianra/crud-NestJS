import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly imageURL: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  readonly createDate: Date;
}
