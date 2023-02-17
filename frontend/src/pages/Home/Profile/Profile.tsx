import styles from "./Profile.module.css";
import backgroundCard from "../../../assets/backgroundCard.jpg"
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { CameraAlt, Check, Clear, Email, LinkedIn, Wallpaper, WhatsApp } from "@mui/icons-material";
import imgUser from '../../../assets/imgUser.jpg'

/* Página para editar perfil do usuário */

export function Profile() {

    const { userData } = useContext(UserContext)

    return (
        <div className={styles.profileContainer}>
            <div className={styles.column1} >
                <h1>Editar Dados Pessoais</h1>
                <form>
                    <div className={styles.input}>
                        <div className={styles.first}>
                            <label>Nome</label>
                            <input placeholder="João Pedro" id="firstName" />
                        </div>
                        <div className={styles.last}>
                            <label>Sobrenome</label>
                            <input placeholder="Vicentin" id="lastName" />
                        </div>
                        <div className={styles.email}>
                            <label>Email</label>
                            <input placeholder="jplvicen@gmail.com" id="email" />
                        </div>
                        <div className={styles.phone} >
                            <label>Phone</label>
                            <input placeholder="1899999999" id="phone" />
                        </div>
                        <div className={styles.linkedin} >
                            <label>Linkedin</label>
                            <input placeholder="Copie a URL da sua conta aqui!" id="phone" />
                        </div>
                        <button>
                            <CameraAlt />
                            Alterar foto
                        </button>
                        <button>
                            <Wallpaper />
                            Alterar capa
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.column2} >
                <div className={styles.cardContainer}>
                    <div className={styles.cardBackground}>
                        <img src={backgroundCard} alt="" />
                        <div className={styles.avatarUser}>
                            {userData.photoURL ? <img src={userData.photoURL} alt="foto" /> : <img src={imgUser} alt="foto" />}
                        </div>
                        <div className={styles.infos}>
                            <h1>{userData.displayName ? userData.displayName : 'Usuario 000'}</h1>
                            <p>Fomenta Vale</p>
                            <p>
                                Hey there! As you can see,
                                it is already looking great.
                            </p>
                        </div>
                        <div className={styles.footerCard}>
                            <WhatsApp />
                            <Email />
                            <LinkedIn />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.confirm}> <Check /> Confirmar</button>
                    <button className={styles.cancel}><Clear /> Cancelar</button>
                </div>
            </div>
        </div>
    )
}