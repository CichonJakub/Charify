import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';

//import background from '../wave.svg';

function Footer() {
    return (

        <div className='footer-container'>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <h2>Adres</h2>
                </div>
                <div className="col-sm-2">
                    <h2>Kontakt</h2>
                </div>
                <div className="col-sm-2">
                    <h2>Pomoc</h2>
                </div>
                <div className="col-sm-5">
                    <div className="row">
                        <section className='footer-subscription'>
                            <h2 style={{fontWeight:"bold", paddingLeft:25}}>
                                Aby być na bieżąco z wydarzeniami, dołącz do nas!
                            </h2>
                            <div className='input-areas'>
                                <form>
                                    <div className="col-sm-9">
                                        <div className="input-group mb-3">
                                            <input
                                                className='form-control input-lg'
                                                name='email'
                                                type='email'
                                                placeholder='Twój email'
                                            />
                                            <div className="input-group-append">
                                                <button type="button" className="btn btn-warning">Dołącz</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                    
                    <h2 style={{paddingLeft:25, fontSize:20}}>Media społecznościowe</h2>
    
                   
                   
                    {/*   <Link to='/'>Instagram</Link>*/}
                    {/*<Link to='/'>Facebook</Link>*/}
                    {/*<Link to='/'>Youtube</Link>*/}
                    {/*<Link to='/'>Twitter</Link>*/}


                </div>
                <div className="row justify-content-md-center">
                    <div className="col" style={{textAlign:"center", fontSize:12}}>Charify © 2021</div>
                </div>
            </div>
            {/*<section class='social-media'>*/}
            {/*  <div class='social-media-wrap'>*/}
            {/*    <div class='footer-logo'>*/}
            {/*    </div>*/}
            {/*    <small class='website-rights'>Charify © 2021</small>*/}
            {/*    <div class='social-icons'>*/}
            {/*        <a href="#" className="fa fa-facebook"></a>*/}
            {/*      <Link*/}
            {/*        class='social-icon-link facebook'*/}
            {/*        to='/'*/}
            {/*        target='_blank'*/}
            {/*        aria-label='Facebook'*/}
            {/*      >*/}
            {/*        <i class='fab fa-facebook-f' />*/}
            {/*      </Link>*/}
            {/*      <Link*/}
            {/*        class='social-icon-link instagram'*/}
            {/*        to='/'*/}
            {/*        target='_blank'*/}
            {/*        aria-label='Instagram'*/}
            {/*      >*/}
            {/*        <i class='fab fa-instagram' />*/}
            {/*      </Link>*/}
            {/*      <Link*/}
            {/*        class='social-icon-link youtube'*/}
            {/*        to='/'*/}
            {/*        target='_blank'*/}
            {/*        aria-label='Youtube'*/}
            {/*      >*/}
            {/*        <i class='fab fa-youtube' />*/}
            {/*      </Link>*/}
            {/*      <Link*/}
            {/*        class='social-icon-link twitter'*/}
            {/*        to='/'*/}
            {/*        target='_blank'*/}
            {/*        aria-label='Twitter'*/}
            {/*      >*/}
            {/*        <i class='fab fa-twitter' />*/}
            {/*      </Link>*/}
            {/*      <Link*/}
            {/*        class='social-icon-link twitter'*/}
            {/*        to='/'*/}
            {/*        target='_blank'*/}
            {/*        aria-label='LinkedIn'*/}
            {/*      >*/}
            {/*        <i class='fab fa-linkedin' />*/}
            {/*      </Link>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
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
