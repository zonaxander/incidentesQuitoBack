import { IsNotEmpty } from "class-validator";

export class CreateIncidenteDto {

    @IsNotEmpty()
    direccion: string;
    @IsNotEmpty()
    latitud: number;
    @IsNotEmpty()
    longitud: number;
    @IsNotEmpty()
    persona: string;
    @IsNotEmpty()
    fotoUno: string;
    @IsNotEmpty()
    fotoDos: string;
    estado:string;

}
