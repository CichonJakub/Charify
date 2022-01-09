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
                <Link to='/' className='nav-links' onClick={closeMobileMenu}
                style={{ textDecoration: 'none' }}>
                  Strona główna
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/form'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{ textDecoration: 'none' }}
                >
                  Zgłoś wydarzenie
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{ textDecoration: 'none' }}
                >
                  O nas
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up '
                  className='nav-links-mobile'
                  style={{ textDecoration: 'none' }}
                >
                  Zaloguj się
                </Link>
              </li>
            </ul>
              
              <div style={{paddingBottom:5}}>
                  <Link to='/login'>
                    {button && <button style={{paddingBottom:10, paddingLeft:30, paddingRight:30, paddingTop:10, fontSize:20}} className="btn btn-warning btn-lg">Zaloguj się</button>}
                  </Link>
              </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;