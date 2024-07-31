import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity('trajets')
export class Trajet {
    @PrimaryGeneratedColumn('uuid')
    id:string
        @Column()
        libelle: string
        @Column()
        tarif: string

}
