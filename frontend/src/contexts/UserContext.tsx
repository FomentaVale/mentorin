import { createContext, ReactNode, useState } from "react";
import { User } from 'firebase/auth'
import { useNavigate } from "react-router";
import { api } from "../lib/axios";
import { setCookie } from "nookies";

interface SignInCredentials{
    emailUsuario: string,
    senha: string
}

interface SignUpCredentials{
    nomeUsuario: string,
    emailUsuario: string,
    senha: string
}

interface UserContextProvidersProp {
    children: ReactNode
}

interface UserContextType {
    userData: User,
    signUp(credentials: SignInCredentials): Promise<void>
    signIn(credentials: SignInCredentials): Promise<void>
    isAuthenticated: boolean
    user: string
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProvidersProp) {

    const [user, setUser] = useState('')
    const [userData, setUserData] = useState<User>({} as User)

    // constante para navegar entre as páginas
    const navigate = useNavigate() 
    
    // constante para verificar se o usuário esta logado para acessar determinadas partes da aplicação
    const isAuthenticated = !!user;

    // funcao para verificar se existe o usário com o email e senha passados no formulário de login
    async function signIn({ emailUsuario, senha }: SignInCredentials){
        try {
            const response = await api.post('/api/v1/auth/signin', {
                emailUsuario, 
                senha
            })

            const { acess_token } = response.data

            setCookie(undefined, 'carcara.token', acess_token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })
            
            setUser(emailUsuario)
            console.log(response.data)
            navigate("/home")
        } catch(err) {
            console.log(err)
        }
    }

    // função para cadastrar um novo usuário
    async function signUp({ nomeUsuario, emailUsuario, senha }: SignUpCredentials){
        try {
            const response = await api.post('/api/v1/auth/signup', {
                nomeUsuario,
                emailUsuario, 
                senha
            })
            console.log(response.data)
            navigate("/")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <UserContext.Provider value={{user, userData, signUp, signIn, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}