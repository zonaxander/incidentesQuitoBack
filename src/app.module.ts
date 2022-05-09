import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { IncidentesModule } from './incidentes/incidentes.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'), 
    PersonasModule, 
    NotificacionesModule, 
    IncidentesModule, 
    CatalogoModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
