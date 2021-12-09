import background from "../wave.svg";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Homepage(){

    return(
        <>
            <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                <div className="topnav">
                    <a className="active" href="#wydarzenia">Wszystkie wydarzenia</a>
                    <a>O nas</a>
                    <a>Zgłoś wydarzenie</a>
                    <a id="login">Zaloguj się</a>
                </div>
            </div>
            {/*<div className="task-wrapper flex-wrapper">*/}
            {/*    <input className="flex-button"  value={this.state.input_value} onChange={(inp_val) => { this.setState({ input_value: parseInt(inp_val.currentTarget.value) }) }} />*/}
            {/*    <button type="button" className="button" onClick={() => { this.setState({ qid: this.state.input_value }, this.fetchData) }}>Przejdz do rekordu o podanym ID</button>*/}
            {/*</div>*/}
            <div className="slider" align="center">
                <h4>Najciekawsze wydarzenia</h4>
                <Carousel className = "carousel">
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={"./event1.jpg"}
                            alt="Image One"/>
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={"./event2.jpg"}
                            alt="Image Two"/>
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <span style={{fontSize: 24}}>
                    <Link to="/6">
                        <p>
                            Event 6
                        </p>
                    </Link>
                </span>
            </div>
            <footer>
                <div className="container-fluid">
                    <div id="contact">
                        <ul>
                            <li className="glyphicon glyphicon-envelope"> charify@gmail.com</li>
                            <li className="glyphicon glyphicon-phone"> +48111111111</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    ); 
}