import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { CatsController } from './cats.controller'; */
import { CatsController } from './cats/cats.controller';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Mensaje } from './mensajes/entities/mensaje.entity';
import { MensajesService } from './mensajes/mensajes.service';


@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, CatsController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}