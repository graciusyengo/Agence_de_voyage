import { IsOptional, IsString, IsUUID } from "class-validator"

export class CreateBusDto {

    @IsOptional()
    @IsString()
        modele:string

    

        @IsUUID()
        @IsOptional()
        trajetId: string


        @IsUUID()
        @IsOptional()
        agenceId: string

        @IsUUID()
        @IsOptional()
        dateId: string

}
