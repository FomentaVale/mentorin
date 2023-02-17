import { Pessoa } from "@prisma/client";
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUsuarioDto {
    nomeUsuario: string
    dataNascimento: string
    numeroCelular: string
    emailUsuario: string
    hash: string
}