import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('incidentes')
@Controller('incidentes')
export class IncidentesController {
  constructor(private readonly incidentesService: IncidentesService) {}

  @Post()
  create(@Body() createIncidenteDto: CreateIncidenteDto) {
    return this.incidentesService.create(createIncidenteDto);
  }

  @Get()
  findAll() {
    return this.incidentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidenteDto: UpdateIncidenteDto) {
    return this.incidentesService.update(+id, updateIncidenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentesService.remove(+id);
  }
}
