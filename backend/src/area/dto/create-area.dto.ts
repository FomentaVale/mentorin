import {IsInt, IsString, MaxLength, Min } from "class-validator";

export class CreateAreaDto {

    @IsInt()
    @Min(1)
    idArea: number;

    @IsString()
    @MaxLength(300)
    descricaoArea: string;
}