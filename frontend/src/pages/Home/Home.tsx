import { Outlet } from "react-router";
import { Sidebar } from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";

/* Arquivo base da tela de dashboard aqui é gerado o corpo da tela e o elemento outlet 
abaixo é que vai ser gerado o componente selecionado com base na rota */

export function Home() {
    return (
        <div className={styles.body}>
            <Sidebar />
            
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}