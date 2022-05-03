import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas, PersonasDocument } from './schema/personas.schema';
import { Types,Model } from 'mongoose';

@Injectable()
export class PersonasService {
  constructor(@InjectModel(Personas.name) private personasModule:Model<PersonasDocument>){

  }

  async createPersona(createPersonaDto: CreatePersonaDto) {
    const personaCreated= this.personasModule.create(createPersonaDto)
    return personaCreated;
  }

  async findAll() {
    const list= await this.personasModule.find({});
    return list;
  }

  findOne(id: number) {
    return this.personasModule.findById(id).populate('nacionalidad');
  }

  update(id: Types.ObjectId, updatePersonaDto: UpdatePersonaDto) {
    const personaUpdated= this.personasModule.updateOne({"_id":id},{$set: updatePersonaDto})
    return personaUpdated;
  }

  async updatePassword(id: Types.ObjectId, updatePersonaDto:UpdatePersonaDto) {
  const persona = await this.personasModule.findById(id).exec();

  if(updatePersonaDto.passwordOld == persona.password){
    updatePersonaDto.fechaEdicion = new Date();
    const personaUpdated= this.personasModule.updateOne({"_id":id},{$set:updatePersonaDto})
    return personaUpdated;
  }else{
    throw new HttpException('La contraseña antigua no es correcta', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }


  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
