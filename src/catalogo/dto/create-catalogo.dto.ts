import { IsNotEmpty } from "class-validator";

export class CreateCatalogoDto {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    valor: string;
}
