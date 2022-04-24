
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
  @Prop()
  nacionalidad: number;  
  @Prop()
  direccion: string;
  @Prop({required:true})
  correo: string;
  @Prop()
  telefono: number;
  @Prop({required:true})
  password: string;
  @Prop({default:0})
  strikes: number;
  @Prop()
  bloqueo: string;
  @Prop()
  fotoPerfil: string;
  @Prop()
  fotoCedula: string;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop()
  fechaEdicion:Date;
}

export const PersonasSchema = SchemaFactory.createForClass(Personas);
