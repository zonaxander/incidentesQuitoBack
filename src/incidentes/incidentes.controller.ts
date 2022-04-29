import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpException, HttpStatus, UploadedFiles } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
var ObjectID = require('mongodb').ObjectID;

@ApiTags('incidentes')
@Controller('incidentes')
export class IncidentesController {
  constructor(private readonly incidentesService: IncidentesService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'fotoUno', maxCount: 1 },
    { name: 'fotoDos', maxCount: 1 },
  ]))
  async create(@Body() createIncidenteDto: CreateIncidenteDto,@UploadedFiles() files: Express.Multer.File[]) {
    if(files){
      const fileB64Uno = files['fotoUno'][0].buffer.toString('base64');
      const fileB64Dos = files['fotoDos'][0].buffer.toString('base64');
      createIncidenteDto.fotoUno=fileB64Uno;
      createIncidenteDto.fotoDos=fileB64Dos;
      return await this.incidentesService.create(createIncidenteDto).catch(err => {
        this.errorCatch(err)
      })
    }else{
      throw new HttpException('Error en las fotografias', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll() {
    return this.incidentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.incidentesService.findOne(id);
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
