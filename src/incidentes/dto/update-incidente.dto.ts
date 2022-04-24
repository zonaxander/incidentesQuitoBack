import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidenteDto } from './create-incidente.dto';

export class UpdateIncidenteDto extends PartialType(CreateIncidenteDto) {}
