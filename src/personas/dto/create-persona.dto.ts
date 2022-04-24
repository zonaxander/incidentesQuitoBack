import { IsNotEmpty, Max } from "class-validator";

export class CreatePersonaDto {
    @IsNotEmpty()
    identificacion: string;

    @IsNotEmpty()
    nombres: string;
  
    @IsNotEmpty()
    apellidos: string;
    nacionalidad: number;  
    direccion: string;

    @IsNotEmpty()
    correo: string;
    telefono: number;

    @IsNotEmpty()
    password: string;
    strikes: number;
    bloqueo: string;
    fotoPerfil: string;
    fotoCedula: string;
}
