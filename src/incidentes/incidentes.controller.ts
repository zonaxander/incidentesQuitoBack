import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpException, HttpStatus, UploadedFiles, Put } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
var ObjectID = require('mongodb').ObjectID;

@ApiTags('incidentes')
@Controller('incidentes')
export class IncidentesController {
  constructor(private readonly incidentesService: IncidentesService) {}

  @Post()
  async create(@Body() createIncidenteDto: CreateIncidenteDto) {
    return await this.incidentesService.create(createIncidenteDto).catch(err => {
      this.errorCatch(err)
    })
  }

  @Get()
  findAll() {
    return this.incidentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.incidentesService.findOne(id);
  }

  @Get('findByIdPersona/:idPersona')
  findByIdPersona(@Param('idPersona') idPersona: number) {
    return this.incidentesService.findByIdPersona(idPersona);
  }

  @Put(':id')
  update(@Param('id') id: number,@Body() updateIncidenteDto: UpdateIncidenteDto) {
    return this.incidentesService.update(ObjectID(id), updateIncidenteDto);
  }

  @Put('updateEstadoById/:id/:estado')
  updateEstadoById(@Param('id') id: number,@Param('estado') estado: string) {
    return this.incidentesService.updateEstadoById(ObjectID(id), estado);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentesService.remove(+id);
  }

  errorCatch(err){
    throw new HttpException({
      return: {
        'code':err.code,
        'message':err.message
      }
    }, HttpStatus.BAD_REQUEST);
  }
}
