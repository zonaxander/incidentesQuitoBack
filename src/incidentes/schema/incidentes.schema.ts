
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IncidentesDocument = Incidentes & Document;

@Schema()
export class Incidentes {
  @Prop({required:true})
  direccion: string;
  @Prop({default:null})
  descripcion: string;
  @Prop({required:true})
  latitud: number;
  @Prop({required:true})
  longitud: number;
  @Prop({default:1})
  tipo: number;
  @Prop({default:null})
  fotoUno: string;
  @Prop({default:null})
  fotoDos: string;
  @Prop({required:true})
  idPersona: number;
  @Prop({default:null})
  idAgente: number;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
}

export const IncidentesSchema = SchemaFactory.createForClass(Incidentes);
