import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Homepage.css';
import GetEvents from './GetEvents'
import { logout, checkAuthenticated, load_user } from "../actions/auth";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function User({ user, isAuthenticated }) {

    const navigate = useNavigate();

    function notLogged() {
        alert("Nie jesteś zalogowany/a. Zaloguj się.")
        navigate("/login")
    }

    const ifUserNull = () => {
        if (user != null && isAuthenticated) {
            return (
                <div>
                    <h1>User info</h1>
                    <div><GetEvents id={user.id} /></div>
                </div>
            )
        } else {
            return (
                <div className="task-wrapper flex-wrapper">
                    <h1>Hej! Nie powinno cię tu być! Zaloguj się :)</h1>
                    <button type="button" className="flex-button" onClick={() => notLogged()} >Zaloguj się</button>
                </div>
            )
        }

    }
    return (
        <>
            <div className='hero-container'>
                {ifUserNull()}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { load_user, checkAuthenticated })(User);
