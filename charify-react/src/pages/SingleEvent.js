import React from 'react';
import './SingleEvent.css';
import {useLocation} from 'react-router-dom';

function SingleEvent(){
    
    const location = useLocation();
    console.log(location)
    const single_event = location.state.single_event;
    const addr = single_event.street + ", " + single_event.city;
    const datetime = single_event.event_date.slice(0,10)+ ", " + single_event.event_date.slice(11,-4);
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
                            <div className="element"><h3>Miejsce:</h3><h2>{addr}</h2></div>
                            <div className="element"><h3>Organizator:</h3><h2>{single_event.organizer}</h2></div>
                            <div className="element"><h3>Typ organizatora:</h3><h2>{single_event.organizer_type}</h2></div>
                            <div className="element"><h3>Numer telefonu:</h3><h2>{single_event.phone_number}</h2></div>
                            <div className="element"><h3>Email:</h3><h2>{single_event.email}</h2></div>
                            <div className="element"><h3>Liczba potrzebnych wolontariuszy:</h3><h2>{single_event.number_of_people}</h2></div>
                            <div className="element"><h3>Data:</h3><h2>{datetime}</h2></div>
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
                            </div>
                        </form>
                    </div>

                }
            </div>
        </div>
    );
    
}
export default SingleEvent;