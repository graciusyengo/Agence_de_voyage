import { Module } from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { TrajetsController } from './trajets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trajet } from './entities/trajet.entity';
import { BusModule } from 'src/bus/bus.module';

@Module({
  
  imports:[TypeOrmModule.forFeature([Trajet])],
  controllers: [TrajetsController],
  providers: [TrajetsService],
  exports:[TrajetsService]
})
export class TrajetsModule {}
