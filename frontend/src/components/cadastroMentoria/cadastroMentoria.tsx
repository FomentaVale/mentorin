import { Close } from '@mui/icons-material';
import * as Dialog from '@radix-ui/react-dialog'

import styles from "./cadastroMentoria.module.css";

// formulário de cadastro de mentoria, utilizando a biblioteca radix

export function CadastroMentoria() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />

            <Dialog.Content className={styles.content}>

                <div>
                    <Dialog.Title>
                        <h1>Nova Mentoria</h1>
                    </Dialog.Title>

                    <Dialog.Close className={styles.close}>
                        <Close />
                    </Dialog.Close>
                </div>

                <form className={styles.form}>
                    <input placeholder='Título' />
                    <input type="textarea" placeholder='Descrição' />
                    <input type="date" placeholder="Data da reunião" />
                    <input type="time" placeholder='Duração' />

                    <button type='submit'>Cadastrar</button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}