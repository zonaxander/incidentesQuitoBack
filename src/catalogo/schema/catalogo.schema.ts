
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatalogoDocument = Catalogo & Document;

@Schema()
export class Catalogo {
  @Prop({required:true, unique:true})
  nombre: string;
  @Prop({required:true})
  valor: string;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
  @Prop({default:"ACT"})
  estado:string;
}

export const CatalogoSchema = SchemaFactory.createForClass(Catalogo);
