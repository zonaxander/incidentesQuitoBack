import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notificaciones, NotificacionesSchema } from './schema/notificaciones.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Notificaciones.name,
        schema:NotificacionesSchema,
      }
    ])
  ],
  controllers: [NotificacionesController],
  providers: [NotificacionesService]
})
export class NotificacionesModule {}
