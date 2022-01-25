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
                <div className='container'>
                    <h1>Wydarzenia na które jesteś zapisany: </h1>
                    <div><GetEvents id={user.id} /></div>
                </div>
            )
        } else {
            return (
                <div className="container1">
                    <h1>Hej! Nie powinno cię tu być! Zaloguj się :)</h1>
                    <div style={{padding:10}} className='container2'>
                        <button style={{paddingBottom:10, paddingLeft:30, paddingRight:30, paddingTop:10, fontSize:20}} className="btn btn-warning btn-lg" onClick={() => notLogged()} >Zaloguj się</button>
                    </div>
                </div>
            )
        }

    }
    return (
        <>
            <div className='container'>
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
