import React from 'react';
import Logo from '../assets/LOGO.png';
import '../styles/components/Header/header.scss'

function Header() {
  return <div className='HeaderStyle'>
    <img src={Logo} alt="Logo Kasa" />
    <nav>
      <ul>
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </nav>
    </div>
}

export default Header
