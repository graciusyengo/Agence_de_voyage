import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAgenceDto } from './dto/create-agence.dto';
import { UpdateAgenceDto } from './dto/update-agence.dto';
import { Agence } from './entities/agence.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgenceService {

  constructor(@InjectRepository(Agence) private readonly agenceRepository: Repository<Agence>){}
  
  async create(createAgenceDto: CreateAgenceDto) {
   const agence= await  this.agenceRepository.save(createAgenceDto)

   if(agence) return agence;
   throw new HttpException(`L'enregistrement de l'agence a échoué !`, HttpStatus.CONFLICT);
 
  }

  findAll() {
    return `This action returns all agence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agence`;
  }

  update(id: number, updateAgenceDto: UpdateAgenceDto) {
    return `This action updates a #${id} agence`;
  }

  remove(id: number) {
    return `This action removes a #${id} agence`;
  }
}
