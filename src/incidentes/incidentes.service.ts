import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { Incidentes, IncidentesDocument } from './schema/incidentes.schema';
import { Types,Model } from 'mongoose';
import { Notificaciones, NotificacionesDocument } from 'src/notificaciones/schema/notificaciones.schema';
import { Personas, PersonasDocument } from 'src/personas/schema/personas.schema';

@Injectable()
export class IncidentesService {

  constructor(
    @InjectModel(Incidentes.name) private incidentesModule:Model<IncidentesDocument>,
    @InjectModel(Notificaciones.name) private notificacionesModule:Model<NotificacionesDocument>,
    @InjectModel(Personas.name) private personasModule:Model<PersonasDocument>
    ){

  }
  
  create(createIncidenteDto: CreateIncidenteDto) {
    const incidenteCreated= this.incidentesModule.create(createIncidenteDto)
    return incidenteCreated;
  }

  async findByEstado(estado:string) {
    const list= await this.incidentesModule.find({estado:estado}).populate('persona').populate('tipoIncidente');
    return list;
  }

  async findAll() {
    const list= await this.incidentesModule.find({estado:'GEN'}).populate('persona').populate('tipoIncidente');
    return list;
  }

  findOne(id: number) {
    return this.incidentesModule.findById(id).populate('persona').populate('tipoIncidente');
  }

  findByIdPersona(idPersona: number) {
    return this.incidentesModule.find({persona:idPersona}).exec();
  }

  update(id: Types.ObjectId, updateIncidenteDto:UpdateIncidenteDto) {
    updateIncidenteDto.fechaEdicion = new Date();
    const incidenteUpdated= this.incidentesModule.updateOne({"_id":id},{$set: updateIncidenteDto})
    return incidenteUpdated;
  }

  updateEstadoById(id: Types.ObjectId, estado) {
    const incidenteUpdated= this.incidentesModule.updateOne({"_id":id},{$set: {"estado": estado,"fechaEdicion": new Date()}})
    return incidenteUpdated;
  }

  async reportarIncidenteFalso(idIncidente: Types.ObjectId, estado, idPersona: Types.ObjectId) {
  
  //CREAR NOTIFICACION
    let CreateNotificacioneDto = {
      "titulo":"Reporte Falso",
      "descripcion":"Usted a generado un reporte falso, su cuenta puede ser bloqueada",
      "tipo":"628c13376e6ef703491e194e",
      "persona":idPersona
    }
    const notificacion= await this.notificacionesModule.create(CreateNotificacioneDto)
    if(!notificacion)  throw new HttpException('Error en el servidor',500);

  //ACTUALIZAR PERSONA  STRIKE

    const persona = await this.personasModule.findById(idPersona);
    if(!persona)  throw new HttpException('Persona no encontrada',404);

    if(persona.strikes >=2){
      const personaUpdated= await this.personasModule.updateOne({"_id":idPersona},{$set: {"strikes": persona.strikes+1,"bloqueo": true,"fechaEdicion": new Date()}})
      if(!personaUpdated)  throw new HttpException('Error en el servidor',500);
    }else{
      const personaUpdated= await this.personasModule.updateOne({"_id":idPersona},{$set: {"strikes": persona.strikes+1,"fechaEdicion": new Date()}})
      if(!personaUpdated)  throw new HttpException('Error en el servidor',500);
    }
 
    //ACTUALIZAR INCIDENTE
    const incidente = await this.incidentesModule.updateOne({"_id":idIncidente},{$set: {"estado": estado,"fechaEdicion": new Date()}})
    return incidente;
  }

  remove(id: Types.ObjectId) {
    return `Se ha removido el incidente #${id}`;
  }
}
