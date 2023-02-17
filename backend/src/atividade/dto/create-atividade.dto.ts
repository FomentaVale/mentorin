import { IsInt, IsString } from "class-validator"

export class CreateAtividadeDto {

    @IsInt()
    idTipoAtividade: number

    @IsString()
    tituloAtividade: string

    @IsString()
    dataAtividade: string

    @IsString()
    duracaoAtividade: string

    @IsString()
    linkAtividade: string
}
