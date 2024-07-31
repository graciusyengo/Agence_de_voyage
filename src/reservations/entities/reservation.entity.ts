import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('reservations')

export class Reservation {
@PrimaryGeneratedColumn()
id:string
    @Column()
    nombrePlace: number

    @Column()
    nombreDeColis: number

    @Column()
    montantAPayer: number

    @Column()
    status: string

    @Column({ nullable: true })
    date: string

    @Column({ nullable: true })
    trajetId: string
    @Column({ nullable: true })
    userId: string
}
