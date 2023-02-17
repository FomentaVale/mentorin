import styles from "./Sidebar.module.css";
import { Diversity2, Groups, Home, Logout, RocketLaunch, Settings } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import imgLogo from "../../assets/imgLogo.svg"

export function Sidebar() {

    const { user } = useContext(UserContext)

    // componente sidebar (a coluna da esquerda), para navegação dentro do sistema

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={imgLogo} alt='' />
                </div>
                <div className={styles.user}>
                    <img src='' alt="foto" />
                    <div className={styles.userInfo}>
                        <h1>{user}</h1>
                        <p>Fomenta Vale</p>
                        <span><div className={styles.status} /> Online</span>
                    </div>
                </div>
                <div className={styles.options}>
                    <div>
                        <h1>Gerais</h1>
                        <div className={styles.selectOption}>
                            <div className={styles.icon}>
                                <Home fontSize="small" />
                            </div>
                            <p>Dashboard</p>
                        </div>

                        <div className={styles.selectOption}>
                            <div className={styles.icon}>
                                <Groups fontSize="small" />
                            </div>
                            <p>Contatos</p>
                        </div>

                        <div className={styles.selectOption}>
                            <div className={styles.icon}>
                                <RocketLaunch fontSize="small" />
                            </div>
                            <p>Startup</p>
                        </div>


                        <NavLink to={'/home'} >
                            <div className={styles.selectOption}>
                                <div className={styles.icon}>
                                    <Diversity2 fontSize="small" />
                                </div>
                                <p>Mentorias</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className={styles.optionsFooter}>
                        <NavLink to={"/home/profile"}>
                            <div className={styles.selectOption}>
                                <div className={styles.icon}>
                                    <Settings fontSize="small" />
                                </div>
                                <p>Configurações</p>
                            </div>
                        </NavLink>
                        <NavLink to={"/"} className={styles.selectOption}>
                            <div className={styles.icon}>
                                <Logout fontSize="small" />
                            </div>
                            <p>Sair</p>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}