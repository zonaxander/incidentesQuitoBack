import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { ApiTags } from '@nestjs/swagger';
var ObjectID = require('mongodb').ObjectID;
@ApiTags('notificaciones')
@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}

  @Post()
  create(@Body() createNotificacioneDto: CreateNotificacioneDto) {
    return this.notificacionesService.create(createNotificacioneDto);
  }

  @Get()
  findAll() {
    return this.notificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.notificacionesService.findOne(id);
  }

  @Get('findByIdPersona/:id')
  findByIdPersona(@Param('id') idPersona: number) {
    return this.notificacionesService.findByIdPersona(idPersona);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateNotificacioneDto: UpdateNotificacioneDto) {
    updateNotificacioneDto.fechaEdicion = new Date();
    return this.notificacionesService.update(ObjectID(id), updateNotificacioneDto);
  }

  @Put('updateNotificacionRead/:id/:leido')
  updateNotificacionRead(@Param('id') id: number, @Param('leido') leido: boolean) {
    return this.notificacionesService.updateNotificacionRead(ObjectID(id),leido);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacionesService.remove(+id);
  }
}
