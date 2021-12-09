import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SingleEvent from "./pages/SingleEvent";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/6" element={<SingleEvent eventId="6" />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;