import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TrajetsModule } from './trajets/trajets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/entities/user.entity'
import { Reservation } from './reservations/entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Yengo@1996',
    database: 'agence_voyage',
    entities: [User,Reservation],
    synchronize: true,
  }
   

  ) , UsersModule, ReservationsModule, TrajetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
