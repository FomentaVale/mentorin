import { AccessTime, CalendarMonth, Close, Delete, Edit } from '@mui/icons-material';
import * as Dialog from '@radix-ui/react-dialog'
import imgConcloud from '../../assets/concloudLogo.svg'
import imgUser from '../../assets/imgUser.jpg'
import styles from "./infosMentoria.module.css";

// modal utilizando para exibir as informações da mentoria selecionada

export function InfosMentoria() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />

            <Dialog.Content className={styles.content}>

                <div className={styles.header}>
                    <Dialog.Title>
                        <h1>Título Mentoria</h1>
                    </Dialog.Title>

                    <Dialog.Close className={styles.close}>
                        <Close />
                    </Dialog.Close>
                </div>
                <div className={styles.title}>
                    <div>
                        <img src={imgConcloud} />
                        <p>Concloud</p>
                    </div>
                    <div className={styles.organizador}>
                        <img src={imgUser} />
                        <div>
                            <p>Rafael Machado</p>
                            <span>Organizador(a)</span>
                        </div>
                    </div>
                </div>
                <div className={styles.infosMentoria}>
                    <div className={styles.descricao}>
                        <div className={styles.body}>
                            <h1>Descrição da mentoria</h1>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error dicta corporis accusantium suscipit voluptates veritatis, minima, exercitationem labore inventore eligendi dolor quidem illum sequi quod voluptatibus totam, dolorem nam.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error dicta corporis accusantium suscipit voluptates veritatis, minima, exercitationem labore inventore eligendi dolor quidem illum sequi quod voluptatibus totam, dolorem nam.</li>
                        </div>
                        <div className={styles.footer}>
                            <button className={styles.editar}><Edit /> Editar</button>
                            <button className={styles.deletar}><Delete /> Deletar</button>
                        </div>
                    </div>
                    <div className={styles.outros}>
                        <div className={styles.infosData}>
                            <CalendarMonth /> <p>27 de julho de 2022</p>
                        </div>
                        <div className={styles.infosDuracao}>
                            <AccessTime /> <p>120 minutos</p>
                        </div>
                        <div className={styles.integrantes}>
                            <div className={styles.title}>
                                <p>Integrantes</p>
                            </div>
                            <div className={styles.participantesContainer}>
                                <div className={styles.participante}>
                                    <img src={imgUser} />
                                    <div>
                                        <p>Rafael Machado</p>
                                        <span>Mentor</span>
                                    </div>
                                </div>
                                <div className={styles.participante}>
                                    <img src={imgUser} />
                                    <div>
                                        <p>Rafael Machado</p>
                                        <span>Participante</span>
                                    </div>
                                </div>
                                <div className={styles.participante}>
                                    <img src={imgUser} />
                                    <div>
                                        <p>Rafael Machado</p>
                                        <span>Mentor</span>
                                    </div>
                                </div>
                                <div className={styles.participante}>
                                    <img src={imgUser} />
                                    <div>
                                        <p>Rafael Machado</p>
                                        <span>Participante</span>
                                    </div>
                                </div>
                                <div className={styles.participante}>
                                    <img src={imgUser} />
                                    <div>
                                        <p>Rafael Machado</p>
                                        <span>Participante</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </Dialog.Content>
        </Dialog.Portal>
    )
}