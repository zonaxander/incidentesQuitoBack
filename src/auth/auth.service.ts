import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Personas, PersonasDocument } from '../personas/schema/personas.schema';
import { Types,Model } from 'mongoose';
import {compare} from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Personas.name) private personasModule:Model<PersonasDocument>){

  }

  async login(userObjectLogin:LoginAuthDto){
    const {correo, password}=userObjectLogin;
    const findPersona = await this.personasModule.findOne({correo});
    if(!findPersona)  throw new HttpException('Persona no encontrada',404);

    const checkPassword =  await compare(password,findPersona.password);

    if(!checkPassword)  throw new HttpException('Password Incorrecto',403);

    const data = findPersona

    return data;
  }
}
