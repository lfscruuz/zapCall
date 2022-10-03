import { useState } from 'react';
import styled from 'styled-components';
import seta_play from '../assets/img/seta_play.png';
import seta_virar from '../assets/img/seta_virar.png';
import icone_certo from '../assets/img/icone_certo.png';
import icone_erro from '../assets/img/icone_erro.png';
import icone_quase from '../assets/img/icone_quase.png';
import Botoes from './Botoes';

export default function PerguntaFechada({ pergunta, resposta, index, numeroConcluidas, setNumeroConcluidas}) {

    const [concluiu, setConcluiu] = useState(false);
    const [virar, setVirar] = useState(false);
    const [perguntar, setPerguntar] = useState(false);
    const [escolha, setEscolha] = useState('');

    function zap() {
        setEscolha('ZAP!');
        setNumeroConcluidas(numeroConcluidas + 1);
        setPerguntar(false);
        setConcluiu(true)
    }

    function qnl() {
        setEscolha('Quase Não Lembrei!');
        setNumeroConcluidas(numeroConcluidas + 1);
        setPerguntar(false);
        setConcluiu(true)
    }

    function nl() {
        setEscolha('Não Lembrei');
        setNumeroConcluidas(numeroConcluidas + 1);
        setPerguntar(false);
        setConcluiu(true)
    }

    function abrirPergunta() {
        setPerguntar(true);
    }

    function virarPergunta() {
        setVirar(true)
    }

    if (concluiu === true) {
        return (
            <EstiloPerguntaFechada escolha={escolha}>
                <p>Pergunta {index + 1}</p>
                <img data-identifier="flashcard-status" src={escolha === 'ZAP!' ? icone_certo : escolha === 'Quase Não Lembrei!' ? icone_quase : icone_erro}/>
            </EstiloPerguntaFechada>
        )
    }

    if (perguntar === false) {
        return (
            <EstiloPerguntaFechada data-identifier="flashcard-index-item" escolha={escolha}>
                <p>Pergunta {index + 1}</p>
                <img data-identifier="flashcard-show-btn" onClick={abrirPergunta} src={seta_play} alt='seta_play' />
            </EstiloPerguntaFechada>
        )
    } else {
        if (virar == false) {
            return (
                <EstiloPerguntaAberta data-identifier="flashcard-question">
                    <p>{pergunta}</p>
                    <img data-identifier="flashcard-turn-btn" onClick={virarPergunta} src={seta_virar} alt='seta_virar' />
                </EstiloPerguntaAberta>
            )
        } else {
            return (
                <EstiloPerguntaAberta data-identifier="flashcard-answer">
                    <p>{resposta}</p>
                    <Botoes zap={zap} qnl={qnl} nl={nl} />

                </EstiloPerguntaAberta>

            )
        }
    }

}

const EstiloPerguntaFechada = styled.li`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
> p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.escolha === 'ZAP!' ? '#2FBE34' : props.escolha === 'Quase Não Lembrei!' ? '#FF922E' : props.escolha === 'Não Lembrei' ? '#FF3030' : '#333333'};
    text-decoration: ${props => props.escolha ? 'line-through' : 'initial'}
 }
> img:hover{
    cursor: ${props => props.escolha ? 'initial' : 'pointer'};
}
`

const EstiloPerguntaAberta = styled.li`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
> img{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  > img:hover{
    cursor: pointer;
}
`