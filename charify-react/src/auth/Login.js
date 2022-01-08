import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { login } from '.../actions/auth';
import axios from 'axios';


const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const { email, password } = fromData;

    const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value}) // changing only name in input field, rest data unchanged

    const onsSubmit = e => {
        e.preventDefault();

        login(name, password);
    };

    // is the user authenticated
    // redirecting to the home page

    return(
        <div className='container mt-5'>
            <h1> Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form_control'
                        type='name'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form_control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn--primary' type='submit'>Login</button>
            </form>
            {/*<p className='mt-3'>*/}
            {/*    Dont have an account? <Link*/}
            {/*</p>*/}


        </div>
    )
};

// const mapStateToProps = state => ({
    // authenticated?
// });


export default connect(null, { login })(Login);