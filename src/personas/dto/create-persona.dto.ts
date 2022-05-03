import { IsEmail, IsNotEmpty, Max } from "class-validator";

export class CreatePersonaDto {
    @IsNotEmpty()
    identificacion: string;
    @IsNotEmpty()
    nombres: string;
    @IsNotEmpty()
    apellidos: string;
    @IsNotEmpty()
    nacionalidad: string; 
    direccion: string;
    @IsNotEmpty()
    @IsEmail()
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
