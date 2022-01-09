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
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Login from './auth/Login';
import AllEvents from './pages/AllEvents';
import CustomForm from './pages/Form';
import {Provider} from 'react-redux';
import Store from './auth/Store';
class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        {/* <Route exact path="/" element={<Footer />} /> */}
                        <Route exact path="/" element={<AllEvents/>} />
                        <Route path="/events/:id" element={<SingleEvent />} />
                        <Route exact path="/form" element={<CustomForm requestType="post"
                        articleID={null} />} />
                        <Route exact path="/login" element={<Login/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;