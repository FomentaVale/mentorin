import { Outlet } from "react-router";
import styles from "./Login.module.css";

/* Arquivo base da tela de login, recuperação de senha e cadastro, aqui é gerado o corpo da tela e o elemento outlet 
abaixo é que vai ser gerado o componente selecionado com base na rota */

export function Login() {
    return (
        <main>
            <div className={styles.loginContainer}>
                <Outlet/>
            </div>
            <div className={styles.image}>
            
            </div>
        </main>
    )
}