
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificacionesDocument = Notificaciones & Document;

@Schema()
export class Notificaciones {
  @Prop({required:true})
  titulo: string;
  @Prop({required:true})
  descripcion: string;
  @Prop({default:false})
  leido: boolean;
  @Prop({required:true})
  tipo: number;
  @Prop({required:true})
  idPersona: number; 
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
}

export const NotificacionesSchema = SchemaFactory.createForClass(Notificaciones);
