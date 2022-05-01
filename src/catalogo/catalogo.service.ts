import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { Catalogo } from './entities/catalogo.entity';
import { CatalogoDocument } from './schema/catalogo.schema';
import {Model} from 'mongoose';

@Injectable()
export class CatalogoService {
  constructor(@InjectModel(Catalogo.name) private catalogoModule:Model<CatalogoDocument>){}
  
  create(createCatalogoDto: CreateCatalogoDto) {
    const catalogoCreated= this.catalogoModule.create(createCatalogoDto)
    return catalogoCreated;
  }

  async findAll() {
    const list= await this.catalogoModule.find({});
    return list;
  }

  findOne(id: number) {
    return  this.catalogoModule.findById(id).exec();
  }

  findName(name: string) {
    return this.catalogoModule.find({ nombre: name, estado:'ACT' }).exec();
  }

  update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    return `This action updates a #${id} catalogo`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogo`;
  }
}
