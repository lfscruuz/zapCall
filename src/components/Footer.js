import Concluidas from "./Concluidas"

export default function Footer({ numeroConcluidas, setNumeroConcluidas }) {
    return (
        <div className='footer-concluidos'>
            <div className='container-botoes'>
                <button className='vermelho'>Não lembrei</button>
                <button className='amarelo'>Quase não lembrei</button>
                <button onClick={Zap} className='verde'>Zap!</button>
            </div>
            <Concluidas numeroConcluidas={numeroConcluidas} />
        </div>
    )
}

function Zap(){
    console.log('ZAP!')
}