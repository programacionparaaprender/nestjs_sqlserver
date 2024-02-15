import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { CatsController } from './cats.controller'; */
import { CatsController } from './cats/cats.controller';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { MensajesService } from './mensajes/mensajes.service';

import { environment } from './environments/environment.dev';


@Module({
  imports: [
    TypeOrmModule.forRoot({
		//type: environment.configuracion.type,
		type:"mssql",
        host: environment.configuracion.host,
		port: environment.configuracion.port,
		username: environment.configuracion.username,
		password: environment.configuracion.password,
		database: environment.configuracion.database,
		entities: environment.configuracion.entities,
		synchronize: true,
	}),
    TypeOrmModule.forFeature(environment.configuracion.entities)
  ],
  controllers: [AppController, CatsController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}