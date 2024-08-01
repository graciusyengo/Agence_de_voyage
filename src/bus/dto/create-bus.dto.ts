import { IsOptional, IsString } from "class-validator"

export class CreateBusDto {

    @IsOptional()
    @IsString()
        modele:string

        @IsOptional()
        @IsString()
        code: string

}
