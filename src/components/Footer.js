import Concluidas from "./Concluidas";
import Botoes from "./Botoes";
import styled from "styled-components";
export default function Footer({ numeroConcluidas }) {

    return (
        <FooterConcluidos data-identifier="flashcard-counter">
            <Concluidas numeroConcluidas={numeroConcluidas} />
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
> .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`