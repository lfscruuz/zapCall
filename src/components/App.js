import logo from '../assets/img/logo.png'
import seta_play from '../assets/img/seta_play.png'
import seta_virar from '../assets/img/seta_virar.png'
import { useState } from 'react'

function PerguntaFechada(props){

    const [perguntar, setPerguntar] = useState(false);
    const [virar, setVirar] = useState(false)

    function abrirPergunta(){
        console.log('abriu pergunta')
        let pergunta = true;
        setPerguntar(pergunta)
    }

    function virarPergunta(){
        console.log('virou pergunta')
        let vira = true;
        setVirar(vira)
    }

    if (perguntar === false){
        return (
            <li className='pergunta-fechada'>
                <p>Pergunta {props.index + 1}</p>
                <img onClick={abrirPergunta} src={seta_play} alt='seta_play'/>
            </li>
        )
    }else{
        if(virar == false){
            return (
                <li className='pergunta-aberta'>
                    <p>{props.pergunta}</p>
                    <img onClick={virarPergunta} src={seta_virar} alt='seta_virar'/>
                </li>
            )
        }else{
            return (
                <li className='pergunta-aberta'>
                    <p>{props.resposta}</p>
                </li>
            )
        }
    }
    
}


function Deck() {

    const perguntas = [
        { pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
        { pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
        { pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
        { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
        { pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
        { pergunta: ' Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
        { pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes' },
        { pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
    ]

    return (
        <ul>
            {perguntas.map((p, i) => <PerguntaFechada key={i} pergunta={p.pergunta} resposta={p.resposta} index={i}/>)}
        </ul>
    )
}

export default function App() {


    return (
        <>
            <div className="screen-container">
                <div className='logo-container'>
                    <img src={logo} alt='logo' />
                    <h1>ZapRecall</h1>
                </div>
                <Deck/>
                <div className='footer-concluidos'>
                    <div className='container-botoes'>
                        <button className='vermelho'>Não lembrei</button>
                        <button className='amarelo'>Quase não lembrei</button>
                        <button className='verde'>Zap!</button>
                    </div>
                </div>
            </div>
        </>
    )
}