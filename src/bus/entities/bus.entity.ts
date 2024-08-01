import { Trajet } from "src/trajets/entities/trajet.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('bus')
export class Bus {

    @PrimaryGeneratedColumn('uuid')
    id:string
      
    @PrimaryGeneratedColumn('uuid')
        code:string

        @Column()
        model: string

        @Column({type: 'uuid', nullable: true})
        trajetId:string

        @Column({type: 'uuid', nullable: true})
        agenceId:string

        @Column({type: 'uuid', nullable: true})
        dateId:string

        @ManyToOne(()=> Trajet, (trajet)=> trajet.buses, { onDelete: 'CASCADE', onUpdate: 'CASCADE'})
        trajet: Trajet;

}
