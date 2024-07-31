import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('agence')
export class Agence {
    @PrimaryGeneratedColumn()
    id:string
        @Column()
        agencyName:string

        @Column()
        adress: string

}
