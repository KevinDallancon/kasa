import React from 'react';
import Logo from '../../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <header className='header-style'>
      <img src={Logo} className='header-image' alt="Logo Kasa" />
      <nav className='nav'>
        <ul className='nav_list'>
          <li className={currentRoute === '/' ? 'nav_list-item--active' : 'nav_list-item'}>
              <Link  to='/'>
                  Accueil
              </Link>
          </li>
          <li className={currentRoute === '/about' ? 'nav_list-item--active' : 'nav_list-item'}>
              <Link  to='/about'>
                  A propos
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
