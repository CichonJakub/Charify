import './App.css';
import React from 'react';

class App extends React.Component{

  render(){
    return(
        <div className="container">

          <div id="task-container">
            <div id="form-wrapper">
              <header className="title">
                  <h1>
                      <a>Charify</a>
                  </h1>
              </header> 
            </div>
            <div id="form-wrapper">
                
                <div className="element">
                  <h5>Nazwa eventu:</h5><span>Prezentacja z MPT</span>
                </div>

                <div className="element">
                  <h5>Miejsce:</h5><span>AGH, B9, 1.12</span>
                </div>

                <div className="element">
                  <h5>Data:</h5><span>01.12.21, 11:15</span>
                </div>

                <div className="element">
                  <h5>Liczba potrzebnych osob</h5><span>a ze 4 styknie</span>
                </div>

                <div className="element">
                  <h5>Tagi:</h5><span>#MPT, #charify</span>
                </div>
                <div id="form-wrapper">
                <header className="title">
                   <h2>Opis</h2>
                   <text>Jakiś czas temu zapadły mi w głowę <br />
                   Komutatory przestrzenno czasowe<br />
                   Bo tylko one się wiążą czasami<br />
                   W coś co potocznie nazwiemy węzłami<br />
                   Komutatory wiązane w centralę<br />
                   Będą już mogły rozrastać się stale<br />
                   Będzie wspaniale przez skórę to czuję<br />
                   Że telefonia się nie zablokuje<br />
                   Poza tym kabel optyczny dołączę<br />
                   Zabezpieczenia świecąco wyjące<br />
                   I konsekwencje awarii złagodzę<br />
                   Powód usunę i skutki uszkodzę</text>         
                </header>
                </div>
            </div>

            <div  id="list-wrapper">         
              <form >
                <div className="task-wrapper flex-wrapper"> 
                  <button className="flex-button" formAction="https://youtu.be/jmEMdRYoB_4">Zapisz sie</button>
                  <button className="flex-button" disabled="true">Wypisz sie</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default App;