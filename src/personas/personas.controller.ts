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

  @Post('createPersona')
    async createPersona(@Body() createPersonaDto: CreatePersonaDto) {
      return await this.personasService.createPersona(createPersonaDto).catch(err => {
        this.errorCatch(err)
      })
  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personasService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    updatePersonaDto.fechaEdicion = new Date();
    return this.personasService.update(ObjectID(id), updatePersonaDto);
  }
  
  @Post('updatePassword/:id')
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
