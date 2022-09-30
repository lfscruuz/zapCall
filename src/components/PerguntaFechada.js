import { useState } from 'react'
import seta_play from '../assets/img/seta_play.png'
import seta_virar from '../assets/img/seta_virar.png'

export default function PerguntaFechada({ pergunta, resposta, index, numeroConcluidas }) {
    console.log(numeroConcluidas)

    const [concluiu, setConcluiu] = useState(false);
    const [perguntar, setPerguntar] = useState(false);
    const [virar, setVirar] = useState(false);

    function abrirPergunta() {
        let pergunta = true;
        setPerguntar(pergunta)
    }

    function virarPergunta() {
        let vira = true;
        setVirar(vira)
    }

    if (perguntar === false) {
        return (
            <li className='pergunta-fechada'>
                <p>Pergunta {index + 1}</p>
                <img onClick={abrirPergunta} src={seta_play} alt='seta_play' />
            </li>
        )
    } else {
        if (virar == false) {
            return (
                <li className='pergunta-aberta'>
                    <p>{pergunta}</p>
                    <img onClick={virarPergunta} src={seta_virar} alt='seta_virar' />
                </li>
            )
        } else {
            return (
                <li className='pergunta-aberta'>
                    <p>{resposta}</p>
                </li>
            )
        }
    }

}