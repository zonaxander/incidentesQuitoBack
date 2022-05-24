import { Module } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { IncidentesController } from './incidentes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Incidentes, IncidentesSchema } from './schema/incidentes.schema';
import { Notificaciones, NotificacionesSchema } from '../notificaciones/schema/notificaciones.schema';
import { Personas, PersonasSchema } from '../personas/schema/personas.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Incidentes.name,
        schema:IncidentesSchema,
      },
      {
        name:Notificaciones.name,
        schema:NotificacionesSchema,
      },
      {
        name:Personas.name,
        schema:PersonasSchema,
      },
    ])
  ],
  controllers: [IncidentesController],
  providers: [IncidentesService]
})
export class IncidentesModule {}
