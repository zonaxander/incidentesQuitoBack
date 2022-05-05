import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { Notificaciones, NotificacionesDocument } from './schema/notificaciones.schema';
import { Types,Model } from 'mongoose';

@Injectable()
export class NotificacionesService {

  constructor(@InjectModel(Notificaciones.name) private notificacionesModule:Model<NotificacionesDocument>){

  }
  
  async create(createNotificacioneDto: CreateNotificacioneDto) {
    const notificacionCreated= this.notificacionesModule.create(createNotificacioneDto)
    return notificacionCreated;
  }

  async findAll() {
    return this.notificacionesModule.find({ leido: false }).exec();
  }

  findOne(id: number) {
    return this.notificacionesModule.findById(id).populate('tipo').populate('persona');
  }

  findByIdPersona(idPersona: number) {
    return this.notificacionesModule.find({ persona: idPersona }).populate('tipo').exec();
  }

  update(id: Types.ObjectId, updateNotificacioneDto: UpdateNotificacioneDto) {
    const catalogoUpdated= this.notificacionesModule.updateOne({"_id":id},{$set: updateNotificacioneDto})
    return catalogoUpdated;
  }

  updateNotificacionRead(id: Types.ObjectId, leido: boolean) {
    const notificacionUpdated= this.notificacionesModule.updateOne({"_id":id},{$set: {"leido":leido,"fechaEdicion":new Date()}})
    return notificacionUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacione`;
  }
}
