import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpException, HttpStatus, UploadedFiles } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { ApiTags } from '@nestjs/swagger';
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

  @Get('updateEstadoById/:id/:estado')
  update(@Param('id') id: number,@Param('estado') estado: string) {
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
