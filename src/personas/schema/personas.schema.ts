
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Types,Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Catalogo} from 'src/catalogo/schema/catalogo.schema';

export type PersonasDocument = Personas & Document;

@Schema()
export class Personas {
  @Prop({unique:true})
  identificacion: string;
  @Prop({required:true})
  nombres: string;
  @Prop({required:true})
  apellidos: string;
  @Prop({ required:true,type: mongoose.Schema.Types.ObjectId, ref: Catalogo.name })
  @Type(() => Catalogo)
  nacionalidad: Types.ObjectId;
  @Prop({default:null})
  direccion: string;
  @Prop({required:true, unique:true})
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
  @Prop({default:"ACT"})
  estado:string;
}

export const PersonasSchema = SchemaFactory.createForClass(Personas);
