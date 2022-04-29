import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreatePersonaDto } from './create-persona.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {
    direccion: string;
    @IsNotEmpty()
    @IsEmail()
    correo: string;
    telefono: number;
    fechaEdicion:Date;
    passwordOld;
}
