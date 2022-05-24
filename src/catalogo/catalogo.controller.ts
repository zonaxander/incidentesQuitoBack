import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogoService } from './catalogo.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
var ObjectID = require('mongodb').ObjectID;

@ApiTags('catalogo')
@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Post()
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    console.log(createCatalogoDto);
  //  return this.catalogoService.create(createCatalogoDto);
  }

  @Get()
  findAll() {
    return this.catalogoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catalogoService.findOne(id);
  }

  @Get('findIdPadre/:idPadre')
  findIdPadre(@Param('idPadre') idPadre: string) {
    return this.catalogoService.findIdPadre(idPadre);
  }

  @Get('findByName/:name')
  findName(@Param('name') name: string) {
    return this.catalogoService.findName(name);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(ObjectID(id), updateCatalogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catalogoService.remove(ObjectID(id));
  }
}
