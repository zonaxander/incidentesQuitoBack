import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Types,Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Personas } from 'src/personas/schema/personas.schema';

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
  @Prop({ required:true,type: mongoose.Schema.Types.ObjectId, ref: Personas.name })
  @Type(() => Personas)
  persona: Types.ObjectId;
  @Prop({default:null})
  idAgente: string;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
  @Prop({default:"GEN"})
  estado:string;
}

export const IncidentesSchema = SchemaFactory.createForClass(Incidentes);
