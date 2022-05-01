import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
var ObjectID = require('mongodb').ObjectID;

@ApiTags('personas')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() createPersonaDto: CreatePersonaDto, @UploadedFile() file: Express.Multer.File) {
    if(file){
      const fileB64 = file.buffer.toString('base64')
      createPersonaDto.fotoCedula=fileB64
      return await this.personasService.create(createPersonaDto).catch(err => {
        this.errorCatch(err)
      })
    }else{
      throw new HttpException('Error en la fotografia', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    updatePersonaDto.fechaEdicion = new Date();
    return this.personasService.update(ObjectID(id), updatePersonaDto);
  }

  @Post('updateFotoPerfil/:id/:tipo')
  @UseInterceptors(FileInterceptor('file'))
  updateFotoPerfil(@Param('id') id: number,@Param('tipo') tipo: string,@Body() updatePersonaDto: UpdatePersonaDto, @UploadedFile() file: Express.Multer.File) {
    if(file){
      if(tipo=="cedula"){
        updatePersonaDto.fotoCedula  = file.buffer.toString('base64');
      }else{
        updatePersonaDto.fotoPerfil  = file.buffer.toString('base64');
      }
      updatePersonaDto.fechaEdicion = new Date();
      return this.personasService.updateFotoPerfil(ObjectID(id), updatePersonaDto);
    }else{
      throw new HttpException('Error en la fotografia', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  @Patch('updatePassword/:id')
  updatePassword(@Param('id') id: number, @Body() updatePersonaDto) {
    return this.personasService.updatePassword(ObjectID(id), updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasService.remove(+id);
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
