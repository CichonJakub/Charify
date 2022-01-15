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
import AllEvents from './pages/AllEvents';
import CustomForm from './pages/Form'
import Login from './pages/Login';
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    {/* <Route exact path="/" element={<Footer />} /> */}
                    <Route exact path="/" element={<AllEvents/>} />
                    <Route path="/sign-up" element={<Login/>} />
                    <Route path="/events/:id" element={<SingleEvent />} />
                    <Route path="/form" element={<CustomForm requestType="post"
                    articleID={null} />} />
                    
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;