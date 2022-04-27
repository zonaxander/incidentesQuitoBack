import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { Incidentes, IncidentesDocument } from './schema/incidentes.schema';
import {Model} from 'mongoose';

@Injectable()
export class IncidentesService {

  constructor(@InjectModel(Incidentes.name) private incidentesModule:Model<IncidentesDocument>){

  }
  
  create(createIncidenteDto: CreateIncidenteDto) {
    const incidenteCreated= this.incidentesModule.create(createIncidenteDto)
    return incidenteCreated;
  }

  async findAll() {
    const list= await this.incidentesModule.find({});
    return list;
  }

  findOne(id: number) {
    return  this.incidentesModule.findById(id).exec();
  }

  update(id: number, updateIncidenteDto: UpdateIncidenteDto) {
    return `This action updates a #${id} incidente`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidente`;
  }
}
