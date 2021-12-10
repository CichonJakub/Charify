import React from 'react';
import axios from "axios";
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

//import background from '../wave.svg';

function Footer(){
        return (
            <div className='footer-container'>
            <section className='footer-subscription'>
              <p className='footer-subscription-heading'>
                Aby być na bieżąco z wydarzeniami, dołącz do nas!
              </p>
              <div className='input-areas'>
                <form>
                  <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Twój email'
                  />
                  <Button buttonStyle='btn--outline'>Dołącz</Button>
                </form>
              </div>
            </section>
            <div class='footer-links'>
              <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                  <h2>Adres</h2>
                </div>
                <div class='footer-link-items'>
                  <h2>Kontakt</h2>
                </div>
              </div>
              <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                  <h2>Pomoc</h2>
                </div>
                <div class='footer-link-items'>
                  <h2>Media społecznościowe</h2>
                  <Link to='/'>Instagram</Link>
                  <Link to='/'>Facebook</Link>
                  <Link to='/'>Youtube</Link>
                  <Link to='/'>Twitter</Link>
                </div>
              </div>
            </div>
            <section class='social-media'>
              <div class='social-media-wrap'>
                <div class='footer-logo'>
                </div>
                <small class='website-rights'>Charify © 2021</small>
                <div class='social-icons'>
                  <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                  >
                    <i class='fab fa-facebook-f' />
                  </Link>
                  <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                  >
                    <i class='fab fa-instagram' />
                  </Link>
                  <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                  >
                    <i class='fab fa-youtube' />
                  </Link>
                  <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                  >
                    <i class='fab fa-twitter' />
                  </Link>
                  <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                  >
                    <i class='fab fa-linkedin' />
                  </Link>
                </div>
              </div>
            </section>
          </div>
            // <div>
            //     {/* <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}> */}
            //     <div>
            //     <div className="topnav">
            //         <a className="active" href="#wydarzenia">Wszystkie wydarzenia</a>
            //         <a>O nas</a>
            //         <a>Zgłoś wydarzenie</a>
            //         <a id="login">Zaloguj się</a>
            //     </div>
            // </div>
            // <footer>
            //     <div>
            //         <div id="contact">
            //             <ul>
            //                 <li className="glyphicon glyphicon-envelope"> charify@gmail.com</li>
            //                 <li className="glyphicon glyphicon-phone"> +48111111111</li>
            //             </ul>
            //         </div>
            //     </div>
            // </footer>
            // </div>
        )
    }

export default Footer
