import { Trajet } from "src/trajets/entities/trajet.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity('reservations')

export class Reservation {
@PrimaryGeneratedColumn('uuid')
id:string
    @Column()
    nombrePlace: number

    @Column()
    nombreDeColis: number

    @Column()
    status: string

    @Column({ nullable: true })
    date: string

    @Column({type:'uuid', nullable: true })
    trajetId: string
    @Column({type:'uuid', nullable: true })
    userId: string

    @Column({ type:'uuid',nullable: true })
    dateRes:string

    @ManyToOne(()=> Trajet, (trajet)=> trajet.reservations, { onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    trajet: Trajet;
}
