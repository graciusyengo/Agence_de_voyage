import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { Repository } from 'typeorm';
import { Bus } from './entities/bus.entity';
import { TrajetsService } from 'src/trajets/trajets.service';
import { InjectRepository } from '@nestjs/typeorm';
import { success } from 'src/utils/helper';

@Injectable()
export class BusService {

  constructor(@InjectRepository(Bus) private readonly busRepository: Repository<Bus>,
    private readonly trajetService: TrajetsService
  ){

  }
  async create(createBusDto: CreateBusDto) {
   console.log(await this.trajetService.getOne(createBusDto.trajetId)) 

  const bus= await this.busRepository.save(createBusDto)
   const message= `le bus à été ajouter avec success`

   if(bus) return success(message,bus)
    throw new HttpException(`Echec d'enregistrement`,HttpStatus.CONFLICT)
  }

  findAll() {
    return `This action returns all bus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bus`;
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}
