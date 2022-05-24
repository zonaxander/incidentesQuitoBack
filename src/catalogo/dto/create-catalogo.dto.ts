import { IsNotEmpty } from "class-validator";

export class CreateCatalogoDto {
    @IsNotEmpty()
    idPadre:string;
    @IsNotEmpty()
    nombre: string;
    @IsNotEmpty()
    valor: string;
    @IsNotEmpty()
    tipo: string;
    estado:string;
}
