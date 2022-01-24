import React, { useState } from 'react';
import './SingleEvent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './Homepage.css';
import "bootstrap/dist/css/bootstrap.css";
import { logout, checkAuthenticated, load_user } from "../actions/auth";
import { connect } from 'react-redux';
import axios from "axios";

function SingleEvent({ user, isAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();
    let single_event = location.state.single_event
    const addr = single_event.street + ", " + single_event.city;
    const datetime = single_event.event_date.slice(0, 10) + ", " + single_event.event_date.slice(11, -4);
    const [signed_in, setSigned] = useState(true);
    const event_users = single_event.users.split(",");

    function isLoggedIn() {
        if (user != null && isAuthenticated) {
            return true;
        } else {
            return false;
        }
    }
    function notLogged() {
        alert("Nie jesteś zalogowany/a. Zaloguj się.")
        navigate("/login")
    }
    function decrement() {
        single_event.number_of_people = single_event.number_of_people - 1;
        setSigned(!signed_in);
        updateEvent();
        alert("Dziękujemy za zgłoszenie!")
        //navigate('/');
    }
    function increment() {
        single_event.number_of_people = single_event.number_of_people + 1;
        setSigned(!signed_in);
        updateEvent();
        alert("Wypisałeś/aś się z wydarzenia. Może jednak wpadniesz? :)")
        //navigate('/');
    }
    function alterUsersField() {
        let new_users = '';
        if (check_signed_in()) {
            if (signed_in) {//wpisany i sie wypisuje
                let cut_id = "," + user.id;
                let temp_cut = single_event.users.split(cut_id);
                new_users = temp_cut[0] + temp_cut[1];
            } else {//wypisal sie po wejsciu na strone i sie znowu wpisuje
                new_users = single_event.users;
            }
        } else {
            if (signed_in) {//nie wpisany i sie wpisuje
                new_users = single_event.users + "," + user.id;
            } else { //wpisal sie po wejsciu na strone i sie wypisuje
                new_users = single_event.users;
            }
        }
        return new_users
    }
    function check_signed_in() {
        console.log("users: " + event_users)
        if (event_users.includes(user.id.toString())) {
            return true;
        } else {
            return false;
        }
    }
    function disableButton() {
        const signed = check_signed_in();
        if (signed_in) {
            if (signed) {
                return true;
            } else {
                return false;
            }
        } else {
            if (signed) {
                return false;
            } else {
                return true;
            }
        }
    }
    function updateEvent() {
        let postObj = new FormData();
        postObj.append("title", single_event.title);
        postObj.append("description", single_event.description);
        postObj.append("street", single_event.street);
        postObj.append("city", single_event.city)
        postObj.append("organizer", single_event.organizer);
        postObj.append("organizer_type", single_event.organizer_type);
        postObj.append("phone_number", single_event.phone_number);
        postObj.append("email", single_event.email);
        postObj.append("number_of_people", parseInt(single_event.number_of_people));
        postObj.append("event_date", single_event.event_date);
        postObj.append("tags", single_event.tags);
        postObj.append("users", alterUsersField());

        return axios
            .put(`http://127.0.0.1:8000/api/events/${single_event.id}/`, postObj)
            .then((res) => {
                if (res.status === 200) {
                    //this.props.history.push(`/`);
                }
            });
    }
    return (
        <div className="container">
            <div>
                {single_event !== null ?
                    <div id="task-container">
                        <div id="form-wrapper">
                            <div className="event_title"><h1>{single_event.title}</h1></div>
                            {/* <figure className='cards__item__pic-wrap'> */}
                            <div className="row justify-content-center" style={{ padding: 25 }}>
                                <div className="col-7">
                                    <img
                                        className="img-responsive rounded center-block d-block mx-auto"
                                        // className='cards__item__img'
                                        // alt='Travel Image'
                                        src={single_event.photo}
                                    />
                                </div>

                                {/* </figure> */}

                            </div>
                            <div id="form-wrapper">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Miejsce:</th>
                                            <td className="text-right">{addr}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Organizator:</th>
                                            <td className="text-right">{single_event.organizer}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Typ organizatora</th>
                                            <td className="text-right">{single_event.organizer_type}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Numer telefonu:</th>
                                            <td className="text-right">{single_event.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email:</th>
                                            <td className="text-right">{single_event.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Liczba potrzebnych wolontariuszy:</th>
                                            <td className="text-right">{single_event.number_of_people}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Data:</th>
                                            <td className="text-right">{datetime}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#Tagi:</th>
                                            <td className="text-right">{single_event.tags}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <header className="title">
                                    <h3>Opis</h3>
                                </header>
                                <div className="opis">{single_event.description}</div>
                            </div>
                        </div>
                        <div id="form-wrapper">
                            <form >
                                {isLoggedIn() ?
                                    disableButton() ?
                                        <div className="task-wrapper flex-wrapper">
                                            <button type="button" className="flex-button" disabled={true} onClick={() => decrement()} >Zapisz się</button>
                                            <button type="button" className="flex-button" disabled={false} onClick={() => increment()}>Wypisz się</button>
                                        </div>
                                        :
                                        single_event.number_of_people === 0 ?
                                            <div className="task-wrapper flex-wrapper">
                                                <button type="button" className="flex-button" disabled={true} >Brak miejsc</button>
                                            </div>
                                            :
                                            <div className="task-wrapper flex-wrapper">
                                                <button type="button" className="flex-button" disabled={false} onClick={() => decrement()} >Zapisz się</button>
                                                <button type="button" className="flex-button" disabled={true} onClick={() => increment()}>Wypisz się</button>
                                            </div>
                                    :
                                    single_event.number_of_people === 0 ?
                                        <div className="task-wrapper flex-wrapper">
                                            <button type="button" className="flex-button" disabled={true}>Brak miejsc</button>
                                        </div>
                                        :
                                        <div className="task-wrapper flex-wrapper">
                                            <button type="button" className="flex-button" onClick={() => notLogged()} >Zapisz się</button>
                                        </div>
                                }
                            </form>
                        </div>
                    </div>
                    :
                    <div id="form-wrapper">
                        {this.state.qid !== 0 ?
                            <div className="task-wrapper flex-wrapper">
                                <div className="flex-button"><h5>Rekord o wpisanym ID nie istnieje</h5></div>
                            </div>
                            : <div></div>}
                        <form >
                            <div className="task-wrapper flex-wrapper">
                                <p>Wydarzenie nieaktualne</p>
                            </div>
                        </form>
                    </div>

                }
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { load_user, checkAuthenticated })(SingleEvent);