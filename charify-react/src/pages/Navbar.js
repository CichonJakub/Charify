import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <img id ="logo"src={"./logo.webp"}/>
              <p>Charify</p>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Strona główna
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/form'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Zgłoś wydarzenie
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  O nas
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Zaloguj się
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>ZALOGUJ SIĘ</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;