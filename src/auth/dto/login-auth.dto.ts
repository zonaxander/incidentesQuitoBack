import { IsEmail, isEmpty, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {
    @IsEmail()
    @IsNotEmpty()
    correo:string;
    @IsNotEmpty()
    password:string
}