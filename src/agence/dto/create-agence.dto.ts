import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAgenceDto {
  @IsNotEmpty({ message: `Le nom du jury est obligatoire` })
  @IsString()
  agencyName: string;

  @IsOptional()
  @IsString()
  
  adress: string;
}
