import { IsInt, IsString } from "class-validator"

export class CreateUserDto {

    @IsString()
    name:string
    @IsString()
    email:string

    @IsInt()
    tel:number

    @IsString()
    adresse:string
}
