import { Usuario } from "@prisma/client";
import { IsEmail, IsInt, IsString, MaxLength, Min } from "class-validator";

export class CreatePessoaDto {
    
    nomePessoa: string
    fonePessoa: string
    emailPessoa: string
    idEmpresa: number
    usuario?: Usuario
    idUsuario?: number | null
    idParticipantes: number
}
