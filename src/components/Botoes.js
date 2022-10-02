import styled from "styled-components"

export default function Botoes({zap, qnl, nl}) {
    return (
        <ConainerBotoes>
            <button onClick={nl} className='vermelho'>Não lembrei</button>
            <button onClick={qnl} className='amarelo'>Quase não lembrei</button>
            <button onClick={zap} className='verde'>Zap!</button>
        </ConainerBotoes>
    )
}

const Botao = styled.div`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
`

const ConainerBotoes = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;

> button {
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
  }
`