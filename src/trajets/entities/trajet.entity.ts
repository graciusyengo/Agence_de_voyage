import { Bus } from "src/bus/entities/bus.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
@Entity('trajets')
export class Trajet {
    @PrimaryGeneratedColumn('uuid')
    id:string
        @Column()
        libelle: string
        @Column()
        tarif: string

    @OneToMany(() => Bus, (bus) => bus.trajet, {cascade: true})
    buses: Bus[];

}
