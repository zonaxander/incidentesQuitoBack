import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('personas')
@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() createPersonaDto: CreatePersonaDto, @UploadedFile() file: Express.Multer.File) {
    //const fileB64 = file.buffer.toString('base64')
    //createPersonaDto.fotoPerfil=fileB64
    return this.personasService.create(createPersonaDto);
  }

  @Get()
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personasService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personasService.remove(+id);
  }
}
