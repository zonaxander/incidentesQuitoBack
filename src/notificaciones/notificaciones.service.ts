import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { Notificaciones, NotificacionesDocument } from './schema/notificaciones.schema';
import {Model} from 'mongoose';

@Injectable()
export class NotificacionesService {

  constructor(@InjectModel(Notificaciones.name) private notificacionesModule:Model<NotificacionesDocument>){

  }
  
  async create(createNotificacioneDto: CreateNotificacioneDto) {
    const notificacionCreated= this.notificacionesModule.create(createNotificacioneDto)
    return notificacionCreated;
  }

  async findAll() {
    const list= await this.notificacionesModule.find({});
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacione`;
  }

  update(id: number, updateNotificacioneDto: UpdateNotificacioneDto) {
    return `This action updates a #${id} notificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacione`;
  }
}
