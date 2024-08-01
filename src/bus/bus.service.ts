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

 async findAll() {
    return await this.busRepository.createQueryBuilder('bus')
    .leftJoinAndSelect('bus.trajet', 'trajet')
    .getMany();
  }

 
    async findOne(id: string){
      const bus = await this.busRepository.createQueryBuilder('bus')

                      .leftJoinAndSelect('bus.trajet', 'trajet')
      
                      .where('bus.id =:id', {id: id})
                      .getOne();
                      const message=`voici le bus rechercher`
      if(bus) return  success(message,bus)
        throw new HttpException(`Ce bus n'existe pas encore !`, HttpStatus.NOT_FOUND);
  }

  async update(id: string, code:string, updateBusDto: UpdateBusDto) {
  const bus=await this.getOne(id,code)
 await this.busRepository.update({id,code},updateBusDto)
  const message=`le bus modifier avec success`
  return success(message,bus)

  }

  async remove(id:string,code:string) {

    console.log(`Searching for Bus with id: ${id} and code: ${code}`);
   const bus= await this.getOne(id,code)
    await this.busRepository.remove(bus);
    const message=`le bus supprimer avec success`
    return success(message,bus)
  }

  async getOne(id: string,code:string) {
  const bus= await this.busRepository.createQueryBuilder('bus')
  .where('bus.id=:id AND bus.code=:code',{id:id,code:code})
  .getOne();

  console.log(`Found Bus: ${bus ? JSON.stringify(bus) : 'none'}`);

  if(bus) return bus
 throw new  HttpException( `l'identifiant de bus inexistant`,HttpStatus.CONFLICT)
  }
}
