import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateIncidenteDto } from './create-incidente.dto';

export class UpdateIncidenteDto extends PartialType(CreateIncidenteDto) {
    @IsNotEmpty()
    direccion: string;
    @IsNotEmpty()
    latitud: number;
    @IsNotEmpty()
    longitud: number;
    @IsNotEmpty()
    persona: string;
    fotoUno: string;
    fotoDos: string;
    estado:string;
    fechaEdicion:Date;
}
