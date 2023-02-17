import { Area, Startup } from "@prisma/client";

export class CreateAtuacaoDto {
    idAtuacao: number;
    descricaoAtuacao: string;
    area: Area;
    idArea: number;
    startup: Startup;
    idStartup: number;
}
