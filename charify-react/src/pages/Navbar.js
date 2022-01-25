import React, { useState, useEffect, Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logout, checkAuthenticated, load_user } from "../actions/auth";
import { connect } from 'react-redux';

function Navbar({ logout, isAuthenticated, user }) {
    
    const ifUserNull = () => {
        if(user == null){
            return(
                <></>
            )
        } else{
            return(
                <li className='user-info' style={{color:"white", textAlign:"center", padding:"0.5rem 1rem", display:"flex", height:"100%", justifyContent:"center"}}>
                  <Link
                  to='/user'
                  className='nav-links'
                  onClick={closeMobileMenu}
                  style={{ textDecoration: 'none' }}
                  >
                  Moje konto
                  </Link>
                </li>

            )
        }
    }
    
    const guestLinks = () => (
        <Fragment>
            <div style={{paddingBottom:5}}>
                <Link to='/login'>
                    {button && <button style={{paddingBottom:10, paddingLeft:30, paddingRight:30, paddingTop:10, fontSize:20}} className="btn btn-warning btn-lg">Zaloguj się</button>}
                </Link>
            </div>
        </Fragment>
    );
    const authLinks = () => (
        <Fragment>
            <div style={{paddingBottom:5}}>
                <Link to='/'>
                    {button && <button style={{paddingBottom:10, paddingLeft:30, paddingRight:30, paddingTop:10, fontSize:20}} className="btn btn-warning btn-lg" onClick={logout}>Wyloguj się</button>}
                </Link>
            </div>
        </Fragment>
    );

    // if(user == null){
        
    // }
    // const userInfo = () => (
    //     <Fragment>
    //         <a>{user}</a>
    //     </Fragment>
    // )
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
              
                  {ifUserNull()}
              
            </ul>
              
              {isAuthenticated ? authLinks() : guestLinks()}
              
          </div>
        </nav>
      </>
    );
  }
  
  const mapStateToProps = state => ({
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user
  });
  
  export default connect(mapStateToProps, { logout, load_user, checkAuthenticated })(Navbar);