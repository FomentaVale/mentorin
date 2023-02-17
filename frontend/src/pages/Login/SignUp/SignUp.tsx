import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styles from "./SignUp.module.css"
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

/* a const schema abaixo define o corpo do formlário de cadastro, está sendo utilizado a biblioteca zod */

const schema = zod.object({
    nomeUsuario: zod.string().nonempty('Digite seu nome completo'),
    // lastName: zod.string().nonempty('Digite seu nome completo'),
    emailUsuario: zod.string().email('Digite um email válido').nonempty('Digite seu email'),
    senha: zod.string().min(6, 'A senha deve conter pelo menos 8 carácteres').nonempty('Digite sua senha'),
    // confirmPassword: zod.string().nonempty('Confirme sua senha'),
    // phone: zod.string().nonempty('Digite seu celular')
})

type NewFormData = zod.infer<typeof schema>

export function SignUp() {

    const { signUp } = useContext(UserContext)

    const {register, handleSubmit, reset, formState} = useForm<NewFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            nomeUsuario: '',
            // lastName: '',
            emailUsuario: '',
            senha: '',
            // confirmPassword: '',
            // phone: ''
        }
    })

    const { errors } = formState as unknown as ErrorsType

    async function handleNewSignUp(data: NewFormData){

        signUp(data)
     }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1>Cadastre-se</h1>
            </div>
            <div className={styles.formBody}>
                <h1>Dados Pessoais</h1>
                <form onSubmit={handleSubmit(handleNewSignUp)}>
                    <div className={styles.input}>
                        <div className={styles.first}>
                            <input placeholder="Nome" id="firstName" {...register('nomeUsuario')} />
                            <span>{errors.firstName?.message}</span>
                        </div>
                        <div className={styles.last}>
                            <input placeholder="Sobrenome" id="lastName"  />
                            <span>{errors.lastName?.message}</span>
                        </div>
                        <div className={styles.email}>
                            <input placeholder="Email" id="email" {...register('emailUsuario')} />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div className={styles.password}>
                            <input type="password" id="password" placeholder="Senha"  {...register('senha')}/>
                            <span>{errors.password?.message}</span>
                        </div>
                        <div className={styles.confirmPassword}>
                            <input type="password" id="confirmPassword" placeholder="Confirme sua senha"  />
                            <span>{errors.confirmPassword?.message}</span>
                        </div>
                        <div className={styles.phone} >
                            <input placeholder="Celular" id="phone" />
                            <span>{errors.phone?.message}</span>
                        </div>
                        <div className={styles.date}>
                            <input type="date" placeholder="Data de Nascimento" />
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.confirm} type="submit">Cadastrar</button>
                        <NavLink to={"/"}>
                            <button className={styles.cancel}>Cancel</button>
                        </NavLink>
                    </div>
                </form>

            </div>
        </div>
    )
}