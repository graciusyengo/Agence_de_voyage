import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator"


export class CreateReservationDto {
    
    @IsOptional()
    @IsNumber()
    nombreDeColis: number



    @IsOptional()
    @IsString()
    status: string

    @IsOptional()
    @IsString()
    date: string

  @IsOptional()
  @IsString()
    trajetId: string

    @IsOptional()
    @IsUUID()
    userId: string

    @IsOptional()
    @IsUUID()
    dataRes: string

    
}
