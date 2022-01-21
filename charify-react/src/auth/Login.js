import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { login, load_user } from '../actions/auth';
import axios from 'axios';
import './Login.css';


const Login = ({ login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const { name, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value}) // changing only name in input field, rest data unchanged

    const onSubmit = e => {
        e.preventDefault();

        login(name, password);
    };
    
    // is the user authenticated
    // redirecting to the home page

    if(isAuthenticated){
        return <Navigate to='/'/>
    }
    return(
        <div className="container" style={{paddingBottom:220, paddingTop:80}}>
        <div className='row justify-content-center'>
            <div className='col-md-3'>
                <h1 style={{fontSize:30,fontWeight:"bold"}}>Logowanie</h1>
                <p style={{fontSize:18, textAlign:"center"}}>Zaloguj się na swoje konto</p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input
                            style={{fontSize:18,padding:5}}
                            className='form-control'
                            type='name'
                            placeholder='Nazwa użytkownika'
                            name='name'
                            value={name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            style={{fontSize:18,padding:5}}
                            className='form-control'
                            type='password'
                            placeholder='Hasło'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='row justify-content-center' style={{paddingBottom:15}}>
                        <div className='col-12 text-center'>
                        <button className='btn btn-warning btn--medium' type='submit'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
            {/*<p className='mt-3'>*/}
            {/*    Dont have an account? <Link*/}
            {/*</p>*/}
            
        </div>
        </div>
    )

};

 const mapStateToProps = state => ({
     isAuthenticated:  state.auth.isAuthenticated
 });

export default connect(mapStateToProps, { login, load_user})(Login);