import { Module } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { IncidentesController } from './incidentes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Incidentes, IncidentesSchema } from './schema/incidentes.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Incidentes.name,
        schema:IncidentesSchema,
      }
    ])
  ],
  controllers: [IncidentesController],
  providers: [IncidentesService]
})
export class IncidentesModule {}
