import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';
import { Trajet } from './entities/trajet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {success} from '../utils/helper'

@Injectable()
export class TrajetsService {

  constructor(@InjectRepository(Trajet) private readonly trajetRepository:Repository<Trajet> ){}

  async create(createTrajetDto: CreateTrajetDto) {

    const trajet= await this.trajetRepository.save(createTrajetDto)
    const message=`le trajet à bien été trouver`
    if(trajet) return success(message,trajet)
    throw new HttpException(`l'enregistrement à echoué`, HttpStatus.CONFLICT)
  }

  findAll() {
    return `This action returns all trajets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trajet`;
  }

  update(id: number, updateTrajetDto: UpdateTrajetDto) {
    return `This action updates a #${id} trajet`;
  }

  remove(id: number) {
    return `This action removes a #${id} trajet`;
  }
}
