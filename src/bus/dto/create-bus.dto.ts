import { IsOptional, IsString, IsUUID } from "class-validator"

export class CreateBusDto {

    @IsOptional()
    @IsString()
        modele:string

        @IsOptional()
        @IsString()
        code: string

        @IsUUID()
        @IsOptional()
        trajetId: string


        @IsUUID()
        @IsOptional()
        agenceId: string

}
