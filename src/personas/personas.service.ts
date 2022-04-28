import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas, PersonasDocument } from './schema/personas.schema';
import {Model} from 'mongoose';

@Injectable()
export class PersonasService {
  constructor(@InjectModel(Personas.name) private personasModule:Model<PersonasDocument>){

  }
  async create(createPersonaDto: CreatePersonaDto) {
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

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
