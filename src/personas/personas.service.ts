import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Personas, PersonasDocument } from './schema/personas.schema';
import { Types,Model } from 'mongoose';
import {hash} from 'bcrypt';
import {compare} from 'bcrypt';

@Injectable()
export class PersonasService {
  constructor(@InjectModel(Personas.name) private personasModule:Model<PersonasDocument>){

  }

  async createPersona(createPersonaDto: CreatePersonaDto) {
    const {password} = createPersonaDto;
    const plainToHash = await hash(password,10);
    createPersonaDto = {...createPersonaDto, password:plainToHash};
    
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



  const persona = await this.personasModule.findById(id);

  if(!persona)  throw new HttpException('Persona no encontrada',404);

  const checkPassword =  await compare(updatePersonaDto.passwordOld,persona.password);

  if(!checkPassword)  throw new HttpException('Password Incorrecto',403);

  const plainToHash = await hash(updatePersonaDto.password,10);
  updatePersonaDto = {...updatePersonaDto, password:plainToHash,fechaEdicion:new Date()};
  const personaUpdated = this.personasModule.updateOne({"_id":id},{$set:updatePersonaDto})
  return personaUpdated;
  
  }


  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
