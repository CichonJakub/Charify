import React from 'react';
import axios from "axios";
import './SingleEvent.css'
import {useLocation} from 'react-router-dom';
import EventItem from './EventItem';

function SingleEvent(){
    
    const location = useLocation();
    console.log(location)
    const single_event = location.state.single_event;
    return (
        <div className="container">
            <div>
                {single_event !== null ?
                    <div id="task-container">
                        <div id="form-wrapper">
                            <div className="event_title"><h1>{single_event.title}</h1></div>
                            <div className='cards'>
                            <figure className='cards__item__pic-wrap'>
                            <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={single_event.photo}
                            />
                            </figure>
                            </div>
                            <div className="element"><h3>Miejsce:</h3><h2>{single_event.address}</h2></div>
                            <div className="element"><h3>Organizator:</h3><h2>{single_event.organizer}</h2></div>
                            <div className="element"><h3>Typ organizatora:</h3><h2>{single_event.organizer_type}</h2></div>
                            <div className="element"><h3>Numer telefonu:</h3><h2>{single_event.phone_number}</h2></div>
                            <div className="element"><h3>Email:</h3><h2>{single_event.email}</h2></div>
                            <div className="element"><h3>Liczba potrzebnych wolontariuszy:</h3><h2>{single_event.number_of_people}</h2></div>
                            <div className="element"><h3>Data:</h3><h2>{single_event.event_date}</h2></div>
                            <div className="element"><h3>#Tagi:</h3><h2>{single_event.tags}</h2></div>
                            <div id="form-wrapper">
                                <header className="title">
                                    <h3>Opis</h3>
                                </header>
                                <div className="opis">{single_event.description}</div>                            </div>
                        </div>
                        {/*<div id="form-wrapper">*/}
                        {/*    <form >*/}
                        {/*        <div className="task-wrapper flex-wrapper">*/}
                        {/*            <button type="button" className="flex-button" disabled={this.state.signed_in} onClick={() => { this.setState({ signed_in: !this.state.signed_in }) }} >Zapisz sie</button>*/}
                        {/*            <button type="button" className="flex-button" disabled={!this.state.signed_in} onClick={() => { this.setState({ signed_in: !this.state.signed_in }) }}>Wypisz sie</button>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
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
                                {/* <input className="flex-button" type="number" value={this.state.input_value} onChange={(inp_val) => { this.setState({ input_value: parseInt(inp_val.currentTarget.value) }) }} />
                                <button type="button" className="flex-button" onClick={() => { this.setState({ qid: this.state.input_value }, this.fetchData) }}>Przejdz do rekordu o podanym ID</button> */}
                            </div>
                        </form>
                    </div>

                }
            </div>
        </div>
    );
    
}
export default SingleEvent;