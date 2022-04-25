
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonasDocument = Personas & Document;

@Schema()
export class Personas {
  @Prop({unique:true})
  identificacion: string;
  @Prop({required:true})
  nombres: string;
  @Prop({required:true})
  apellidos: string;
  @Prop({default:null})
  nacionalidad: number;  
  @Prop({default:null})
  direccion: string;
  @Prop({required:true})
  correo: string;
  @Prop({default:null})
  telefono: number;
  @Prop({required:true})
  password: string;
  @Prop({default:0})
  strikes: number;
  @Prop({default:false})
  bloqueo: string;
  @Prop({default:null})
  fotoPerfil: string;
  @Prop({default:null})
  fotoCedula: string;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
}

export const PersonasSchema = SchemaFactory.createForClass(Personas);
