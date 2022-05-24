import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { Catalogo } from './entities/catalogo.entity';
import { CatalogoDocument } from './schema/catalogo.schema';
import { Types,Model } from 'mongoose';

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

  findIdPadre(idPadre: string) {
    return this.catalogoModule.find({ idPadre: idPadre, estado:'ACT' }).exec();
  }

  update(id: Types.ObjectId, updateCatalogoDto: UpdateCatalogoDto) {
    updateCatalogoDto.fechaEdicion = new Date();
    const catalogoUpdated= this.catalogoModule.updateOne({"_id":id},{$set: updateCatalogoDto})
    return catalogoUpdated;
  }

  remove(id: Types.ObjectId) {
    const catalogoUpdated= this.catalogoModule.updateOne({"_id":id},{$set: {"estado": 'INA',"fechaEdicion": new Date()}})
    return catalogoUpdated;
  }
}
