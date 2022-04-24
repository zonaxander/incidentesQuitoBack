import { Injectable } from '@nestjs/common';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';

@Injectable()
export class IncidentesService {
  create(createIncidenteDto: CreateIncidenteDto) {
    return 'This action adds a new incidente';
  }

  findAll() {
    return `This action returns all incidentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidente`;
  }

  update(id: number, updateIncidenteDto: UpdateIncidenteDto) {
    return `This action updates a #${id} incidente`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidente`;
  }
}
