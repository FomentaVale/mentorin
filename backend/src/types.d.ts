import { Express } from "express"

declare module 'express'{
    interface Request{
        pessoaIdFk: number
    }
}

// {
    
//     idUsuario: number
//     nomeUsuario: string
    
//     emailUsuario: string    
//     hash: string
//     pessoa: Pessoa
//     pessoaIdFk: number

// }