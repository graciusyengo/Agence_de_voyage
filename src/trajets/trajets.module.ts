import { Module } from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { TrajetsController } from './trajets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trajet } from './entities/trajet.entity';

@Module({

  imports:[TypeOrmModule.forFeature([Trajet])],
  controllers: [TrajetsController],
  providers: [TrajetsService],
})
export class TrajetsModule {}
