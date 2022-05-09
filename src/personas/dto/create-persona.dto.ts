import { IsEmail, IsNotEmpty, Max } from "class-validator";

export class CreatePersonaDto {
    @IsNotEmpty({ message: 'La identificación es requerida' })
    identificacion: string;
    @IsNotEmpty()
    nombres: string;
    @IsNotEmpty()
    apellidos: string;
    @IsNotEmpty()
    nacionalidad: string; 
    direccion: string;
    @IsNotEmpty({ message: 'El correo electrónico es requerido' })
    @IsEmail({}, { message: 'Correo Electrónico incorrecto' })
    correo: string;
    telefono: number;
    @IsNotEmpty()
    password: string;
    strikes: number;
    bloqueo: string;
    fotoPerfil: string;
    @IsNotEmpty()
    fotoCedula: string;
    estado:string;
}
