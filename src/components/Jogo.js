import { useState } from 'react'
import logo from '../assets/img/logo.png'
import Deck from './Deck'
import Footer from './Footer'

export default function Jogo() {
    const [numeroConcluidas, setNumeroConcluidas] = useState(0)

    return (
        <div className="screen-container">
            <div className='logo-container'>
                <img src={logo} alt='logo' />
                <h1>ZapRecall</h1>
            </div>
            <Deck numeroConcluidas={numeroConcluidas} setNumeroConcluidas={setNumeroConcluidas} />
            <Footer numeroConcluidas={numeroConcluidas} setNumeroConcluidas={setNumeroConcluidas} />
        </div>
    )
}