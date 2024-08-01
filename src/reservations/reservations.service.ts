import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { TrajetsService } from 'src/trajets/trajets.service';
import { success } from 'src/utils/helper';

@Injectable()
export class ReservationsService {

  constructor(@InjectRepository(Reservation) private readonly reservationRepository:Repository<Reservation>,
private readonly trajetsService: TrajetsService){}

  async create(createReservationDto: CreateReservationDto) {
   console.log(await this. trajetsService.getOne(createReservationDto.trajetId)) 
  const reservation=  await this.reservationRepository.save(createReservationDto)

    const message=`la réservation à été ajouter avec success`

    if(reservation) return success(message,reservation)

  
  }

  async findAll() {
  return await this.reservationRepository.createQueryBuilder('reservation')
   .leftJoinAndSelect('reservation.trajet', 'trajet')
   .getMany()

  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
