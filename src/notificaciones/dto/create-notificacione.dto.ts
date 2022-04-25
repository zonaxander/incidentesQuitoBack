import { IsNotEmpty } from "class-validator";

export class CreateNotificacioneDto {

    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    tipo:number;

    @IsNotEmpty()
    idPersona:number;
}
