import { Module } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { AgenceController } from './agence.controller';
import { Agence } from './entities/agence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forFeature([Agence]),
  ],
  controllers: [AgenceController],
  providers: [AgenceService],
  exports:[AgenceService]
})
export class AgenceModule {}
