import { IsNotEmpty } from "class-validator";

export class CreateIncidenteDto {

    @IsNotEmpty()
    direccion: string;

    @IsNotEmpty()
    latitud: number;

    @IsNotEmpty()
    longitud: number;

    @IsNotEmpty()
    idPersona: number;

}
