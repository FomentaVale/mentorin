import { Area } from "@prisma/client"

export class CreateSkillDto {
    idSkill: number
    nomeSkill: string
    nivelSkill: string
    idArea: number
}
