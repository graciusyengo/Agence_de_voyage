import { Module } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from './entities/bus.entity';
import { TrajetsModule } from 'src/trajets/trajets.module';

@Module({

  imports:[TypeOrmModule.forFeature([Bus]),TrajetsModule],
  controllers: [BusController],
  providers: [BusService],
  exports:[BusService]
})
export class BusModule {}
