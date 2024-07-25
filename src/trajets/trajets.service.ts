import { Injectable } from '@nestjs/common';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';

@Injectable()
export class TrajetsService {
  create(createTrajetDto: CreateTrajetDto) {
    return 'This action adds a new trajet';
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
