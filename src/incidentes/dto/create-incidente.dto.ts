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
    @IsNotEmpty({ message: 'El campo tipoIncidente es requerido' })
    tipoIncidente: string;
    @IsNotEmpty()
    fotoUno: string;
    @IsNotEmpty()
    fotoDos: string;
    estado:string;

}
