import React, { useState } from 'react';
import './SingleEvent.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './Homepage.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function SingleEvent() {

    const location = useLocation();
    console.log(location)
    let single_event = location.state.single_event;
    const addr = single_event.street + ", " + single_event.city;
    const datetime = single_event.event_date.slice(0, 10) + ", " + single_event.event_date.slice(11, -4);
    const [signed_in, setSigned] = useState(false);

    const navigate = useNavigate();


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
        console.log(single_event.event_date)
        postObj.append("tags", single_event.tags);
        //postObj.append("photo", single_event.photo);

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
                                            <td class="text-right">{addr}</td>
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
                                <div className="opis">{single_event.description}</div>                            </div>

                        </div>
                        <div id="form-wrapper">
                            <form >
                                <div className="task-wrapper flex-wrapper">
                                    <button type="button" className="flex-button" disabled={signed_in} onClick={() => decrement()} >Zapisz sie</button>
                                    <button type="button" className="flex-button" disabled={!signed_in} onClick={() => increment()}>Wypisz sie</button>
                                </div>
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
export default SingleEvent;