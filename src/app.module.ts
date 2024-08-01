import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TrajetsModule } from './trajets/trajets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/entities/user.entity'
import { Reservation } from './reservations/entities/reservation.entity';
import { Trajet } from './trajets/entities/trajet.entity';
import { AgenceModule } from './agence/agence.module';
import { Agence } from './agence/entities/agence.entity';
import { BusModule } from './bus/bus.module';
import { Bus } from './bus/entities/bus.entity';


@Module({


  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'yengo',
    database: 'agence_voyage',
    entities: [User,Reservation,Trajet,Agence,Bus],
    synchronize: true,
  }
  ) , UsersModule, ReservationsModule, TrajetsModule, AgenceModule, BusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
