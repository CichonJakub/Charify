import React from 'react';
import axios from "axios";
import '../App.css'

class SingleEvent extends React.Component {

    state = {
        qid: parseInt(new URLSearchParams(window.location.search).get('key')) || 0,
        input_value: 0,
        charify_event: null,
        signed_in: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        let data;
        axios
            .get(`api/events/${this.props.eventId}`)
            .then((res) => {
                data = res.data;
                this.setState({
                    charify_event: data,
                });
            })
            .catch((err) => { });
    }

    render(){

        console.log(this.props.eventId)
        const single_event = this.state.charify_event
        return (
            <div className="container">
                <div key={this.state.qid} id={this.state.qid}>
                    {single_event !== null ?
                        <div id="task-container">
                            <div id="form-wrapper">
                                <div className="element"><h5>Nazwa eventu:</h5><span>{single_event.title}</span></div>
                                <div className="element"><h5>Miejsce:</h5><span>{single_event.address}</span></div>
                                <div className="element"><h5>Organizator:</h5><span>{single_event.organizer}</span></div>
                                <div className="element"><h5>Typ organizatora:</h5><span>{single_event.organizer_type}</span></div>
                                <div className="element"><h5>Numer telefonu:</h5><span>{single_event.phone_number}</span></div>
                                <div className="element"><h5>Email:</h5><span>{single_event.email}</span></div>
                                <div className="element"><h5>Liczba potrzebnych osob:</h5><span>{single_event.number_of_people}</span></div>
                                <div className="element"><h5>Data:</h5><span>{single_event.event_date}</span></div>
                                <div className="element"><h5>Tagi:</h5><span>{single_event.tags}</span></div>
                                <div id="form-wrapper">
                                    <header className="title">
                                        <h2>Opis</h2>
                                        <text>{single_event.description}</text>
                                    </header>
                                </div>
                            </div>
                            <div id="form-wrapper">
                                <form >
                                    <div className="task-wrapper flex-wrapper">
                                        <button type="button" className="flex-button" disabled={this.state.signed_in} onClick={() => { this.setState({ signed_in: !this.state.signed_in }) }} >Zapisz sie</button>
                                        <button type="button" className="flex-button" disabled={!this.state.signed_in} onClick={() => { this.setState({ signed_in: !this.state.signed_in }) }}>Wypisz sie</button>
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
}
export default SingleEvent;