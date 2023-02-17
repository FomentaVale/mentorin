import styles from "./Mentorias.module.css";
import imgConcloud from '../../../assets/concloudLogo.svg'
import imgAdd from '../../../assets/imgAdd.svg'
import imgUser from '../../../assets/imgUser.jpg'
import { AddCircle, Info } from "@mui/icons-material";
import * as Dialog from '@radix-ui/react-dialog'
import { CadastroMentoria } from "../../../components/cadastroMentoria/cadastroMentoria";
import { InfosMentoria } from "../../../components/infosMentoria/infosMentoria";
import { api } from "../../../lib/axios"
import { useEffect } from "react";

/* Função para verificar se o usuário está logado, caso não esteja, ele iráretornar a pagina de login */

async function fetchUsuarios() {
    const response = await api.get('api/v1/auth/signin')
    console.log(response.data)
}

/* Tela para a listagem de mentorias que o usuário cadastrou ou participou */

export function Mentorias() {
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Mentorias</h1>
                    {/* botão para cadastro de mentoria, utilizando biblioteca radix */}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button> <AddCircle fontSize="large" color="success" /> </button>
                        </Dialog.Trigger>

                        <CadastroMentoria />
                    </Dialog.Root>
                </div>
                <p>Listagem de mentorias</p>
            </div>

            <table className={styles.table}>
                <thead>
                    <th>Startup</th>
                    <th>Descrição</th>
                    <th>Participantes</th>
                    <th>Data</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr className={styles.a}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.b}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.a}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.b}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.a}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.b}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                    <tr className={styles.a}>
                        <td>
                            <img src={imgConcloud} />
                            <p>Concloud</p>
                        </td>
                        <td>
                            <p>Reunião para programar os horários das reuniões...</p>
                        </td>
                        <td className={styles.participantes}>
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgUser} />
                            <img className={styles.participante} src={imgAdd} />
                        </td>
                        <td className={styles.data}>
                            <p>22/09/2022</p>
                        </td>
                        <td className={styles.infos}>
                            <Dialog.Root>
                                <Dialog.Trigger className={styles.modal} asChild>
                                    <button> <Info color="primary" /> </button>
                                </Dialog.Trigger>

                                <InfosMentoria />
                            </Dialog.Root>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}