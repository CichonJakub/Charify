import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import SingleEvent from "./pages/SingleEvent";
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Login from './auth/Login';
import Logic from './pages/Logic';
import AllEvents from './pages/AllEvents';
<<<<<<< HEAD
import CustomForm from './pages/Form';
import { Provider } from 'react-redux';
import Store from './auth/Store';
import User from './pages/User';
import ScrollToTop from './pages/ScrollToTop';
=======
import CustomForm from './pages/Form'
import Login from './pages/Login';
>>>>>>> main
class App extends React.Component {

    render() {
        return (
<<<<<<< HEAD
            <Provider store={Store}>
                <BrowserRouter>
                    <Logic>
                    <ScrollToTop />
                    <Navbar />
                    <Routes>

                        <Route exact path="/" element={<AllEvents />} />
                        <Route path="/events/:id" element={<SingleEvent />} />
                        <Route exact path="/form" element={<CustomForm requestType="post"
                            articleID={null} />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/user" element={<User />} />
                    </Routes>
                    <Footer />
                </Logic>
=======
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
>>>>>>> main
            </BrowserRouter>
                
            </Provider >
        )
    }
}

export default App;