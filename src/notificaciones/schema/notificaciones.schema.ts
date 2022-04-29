
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Types,Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Catalogo} from 'src/catalogo/schema/catalogo.schema';
import { Personas } from 'src/personas/schema/personas.schema';

export type NotificacionesDocument = Notificaciones & Document;

@Schema()
export class Notificaciones {
  @Prop({required:true})
  titulo: string;
  @Prop({required:true})
  descripcion: string;
  @Prop({default:false})
  leido: boolean;
  @Prop({ required:true,type: mongoose.Schema.Types.ObjectId, ref: Catalogo.name })
  @Type(() => Catalogo)
  tipo: Types.ObjectId;
  @Prop({ required:true,type: mongoose.Schema.Types.ObjectId, ref: Personas.name })
  @Type(() => Personas)
  persona: Types.ObjectId;
  @Prop({default:new Date()})
  fechaCreacion:Date;
  @Prop({default:null})
  fechaEdicion:Date;
  @Prop({default:"ACT"})
  estado:string;
}

export const NotificacionesSchema = SchemaFactory.createForClass(Notificaciones);
