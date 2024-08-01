import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';
import { Trajet } from './entities/trajet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {success} from '../utils/helper'
import { Bus } from 'src/bus/entities/bus.entity';

@Injectable()
export class TrajetsService {

  constructor(@InjectRepository(Trajet) private readonly trajetRepository:Repository<Trajet> ){}
  async create(createTrajetDto: CreateTrajetDto) {

    const trajet= await this.trajetRepository.save(createTrajetDto)
    const message=`le trajet à bien été trouver`
    if(trajet) return success(message,trajet)
    throw new HttpException(`l'enregistrement à echoué`, HttpStatus.CONFLICT)
  }

 async findAll() {
     const trajets= await this.trajetRepository.find({relations:{buses:true,reservations:true}})
     const message=`voici la listes de tous les trajets`
     if(trajets) return success(message,trajets)
  }

  async update(@Param('id')id: string, updateTrajetDto: UpdateTrajetDto) {

await this.getOne(id)
  await this.trajetRepository.update(id,updateTrajetDto)
  const updatedTrajet= await this.getOne(id);
  const message=`le trejet à été modifier avec success`
  return success(message,updatedTrajet)
    
  }
 
 

  async remove(@Param('id') id: string) {
    const trajet=await this.getOne(id)
     await this.trajetRepository.remove(trajet)
     const message=`le trajet à été supprimer avec success`
     return success(message,trajet)
  }


  async getOne(id: string){
    const trajet = await this.trajetRepository.createQueryBuilder('trajet')
                  .where('trajet.id =:id', {id: id})
                  .getOne();
    if(!trajet) {
      throw new HttpException("Un Trajet avec cet identifiant n' existe pas", HttpStatus.NOT_FOUND);
    }
    return trajet;
  }

  async findOne(id: string) {
    const trajet = await this.trajetRepository.createQueryBuilder('trajet')
                    .leftJoinAndSelect('trajet.buses','bus')
                    .where('trajet.id =:id', {id: id})
                    .getOne();
    if(trajet) return trajet;
    throw new HttpException(`Cette nature n'existe pas encore !`, HttpStatus.NOT_FOUND);
  }
}
