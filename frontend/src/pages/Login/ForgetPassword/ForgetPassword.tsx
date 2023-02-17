import { LockOutlined, MailOutline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styles from "../SignIn/SignIn.module.css";
import imgLogo from "../../../assets/imgLogo2.svg"

export function ForgetPassword() {
    return (
        <div className={styles.loginBody}>
            <div className={styles.formHeader}>
                <img src={imgLogo} />
            </div>
            <div className={styles.formBody}>
                <h1>Recuperar Senha</h1>
                <form>
                    <div className={styles.iconInput}>
                        <MailOutline fontSize="small" />
                        <input placeholder="Email" />
                    </div>
                    <div className={styles.iconInput}>
                        <LockOutlined fontSize="small" />
                        <input type="password" placeholder="Nova Senha" />
                    </div>
                    <div className={styles.iconInput}>
                        <LockOutlined fontSize="small" />
                        <input type="password" placeholder="Confirme sua nova senha" />
                    </div>

                    <NavLink className={styles.login} to={"/"}>
                        <a>Confirmar</a>
                    </NavLink>

                </form>
            </div>
        </div>
    )
}