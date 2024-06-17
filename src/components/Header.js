import React from 'react'
import './Header.css'
import heroImage from '../images/Screenshot.png'

function Header({ scrollToAbout }) {
    return (
        <header>
            <h1>Courtney's Portfolio</h1>
            <div className='Hero'>
            <img src={heroImage} alt='hero'></img>
            <nav>
                <ul>
                    <li><a href="#about" onClick={scrollToAbout}>About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header