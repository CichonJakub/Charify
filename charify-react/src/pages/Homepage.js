import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Homepage(){

    return(
        <>
            {/*<div className="task-wrapper flex-wrapper">*/}
            {/*    <input className="flex-button"  value={this.state.input_value} onChange={(inp_val) => { this.setState({ input_value: parseInt(inp_val.currentTarget.value) }) }} />*/}
            {/*    <button type="button" className="button" onClick={() => { this.setState({ qid: this.state.input_value }, this.fetchData) }}>Przejdz do rekordu o podanym ID</button>*/}
            {/*</div>*/}

            <Container>
                <h4>Najciekawsze wydarzenia</h4>
                <Carousel fade>
                    <Carousel.Item interval={3500}>
                        <Link to="/6"><img
                            className="d-block w-100"
                            src={"./event3.jpg"}
                            alt="Image One" /></Link>
                        <Carousel.Caption>
                            <Link to="/6"><h3>Event 6</h3></Link>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={"./event1.jpg"}
                            alt="Image Two" />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={"./event2.jpg"}
                            alt="Image three" />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3500}>
                        <img
                            className="d-block w-100"
                            src={"./event4.jpg"}
                            alt="Image three" />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <span style={{ fontSize: 24 }}>
                    <Link to="/6">
                        <p>
                            Event 6
                        </p>
                    </Link>
                </span>
            </Container>
        </>
    ); 
}