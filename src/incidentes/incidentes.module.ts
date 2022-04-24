import { Module } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { IncidentesController } from './incidentes.controller';

@Module({
  controllers: [IncidentesController],
  providers: [IncidentesService]
})
export class IncidentesModule {}
