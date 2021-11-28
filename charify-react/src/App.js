import './App.css';
import React from 'react';
import axios from "axios";

class App extends React.Component{

  state = {
      charify_event: []
  }
   
  componentDidMount(){
    let data;
    axios
      .get("api/events")
      .then((res) => {
          data=res.data;
          this.setState({
              charify_event: data,
          });
      })
      .catch((err) => {});
  }

  
  render(){
    const params = new URLSearchParams(window.location.search);
    const qid = parseInt(params.get('key'));
    return(
        <div className="container">
          {this.state.charify_event.filter(c => c.id === qid).map(char_ev => (
          <div key={qid}>
          <div id="task-container">
            <div id="form-wrapper">
              <header className="title">
                  <h1>
                      <text>CHARIFY alpha 0.1</text>
                  </h1>
              </header> 
            </div>
          </div>
          <div id="task-container">
            <div id="form-wrapper">
                <div className="element"><h5>Nazwa eventu:</h5><span>{char_ev.title}</span></div>
                <div className="element"><h5>Miejsce:</h5><span>{char_ev.address}</span></div>
                <div className="element"><h5>Organizator:</h5><span>{char_ev.organizer}</span></div>
                <div className="element"><h5>Typ organizatora:</h5><span>{char_ev.organizer_type}</span></div>
                <div className="element"><h5>Numer telefonu:</h5><span>{char_ev.phone_number}</span></div>
                <div className="element"><h5>Email:</h5><span>{char_ev.email}</span></div>
                <div className="element"><h5>Liczba potrzebnych osob:</h5><span>{char_ev.number_of_people}</span></div>
                <div className="element"><h5>Data:</h5><span>{char_ev.event_date}</span></div>
                <div className="element"><h5>Tagi:</h5><span>{char_ev.tags}</span></div>
                <div id="form-wrapper">
                  <header className="title">
                    <h2>Opis</h2>
                    <text>{char_ev.description}</text>         
                  </header>
                </div>
            </div>
            <div id="form-wrapper">         
              <form >
                <div className="task-wrapper flex-wrapper"> 
                  <button className="flex-button" formAction="https://youtu.be/jmEMdRYoB_4">Zapisz sie</button>
                  <button className="flex-button" disabled="true">Wypisz sie</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          ))}
        </div>
      )
  }
}

export default App;