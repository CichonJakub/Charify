import { Button } from './Button';
import './MainSection.css';
import { logout, checkAuthenticated, load_user } from "../actions/auth";
import { connect } from 'react-redux';
import React, { useState, useEffect, Fragment } from 'react';

function MainSection({user, isAuthenticated}){
    // return (
    //     <div className='hero-container'>
    //     <img id="mainimage" src='./charity1-01-01.jpeg' />
    //     <h1>Pomóż osobom potrzebującym w całej Polsce</h1>
    //     <p>Dołącz do nas!</p>

    //   </div>
    // )

    const ifUserNull = () =>{
        if(user !=null && isAuthenticated){
            return (
                <div className='hero-container'>
                    <h1>Witaj {user.name}!</h1>
                </div>
            )
        }else{
            return (
                <div className='hero-container'>
                    {/* <img id="mainimage" src='./charity1-01-01.jpeg' /> */}
                    <h1>Pomóż osobom potrzebującym w całej Polsce</h1>
                    <p>Dołącz do nas!</p>
                </div>
            )
        }
        
    }
    return(
        <>
            <div className='hero-container'>
                <img id="mainimage" src='./charity1-01-01.jpeg' />
                {ifUserNull()}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, {load_user, checkAuthenticated })(MainSection);
