import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import EventItem from './EventItem';
import './Homepage.css';

export default function Homepage(){

    return(
        <>
            {/*<div className="task-wrapper flex-wrapper">*/}
            {/*    <input className="flex-button"  value={this.state.input_value} onChange={(inp_val) => { this.setState({ input_value: parseInt(inp_val.currentTarget.value) }) }} />*/}
            {/*    <button type="button" className="button" onClick={() => { this.setState({ qid: this.state.input_value }, this.fetchData) }}>Przejdz do rekordu o podanym ID</button>*/}
            {/*</div>*/}

            {/* <Container>
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
            </Container> */}
      <div className='cards'>
        <h1>Ostatnie najciekawsze wydarzenia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <EventItem
              src='./event1.jpg'
              text='Event1'
              path='/1'
            />
            <EventItem
              src='./event2.jpg'
              text='Event2'
              path='/2'
            />
          </ul>
          <ul className='cards__items'>
            <EventItem
              src='./event3.jpg'
              text='Event3'
              path='/3'
            />
            <EventItem
              src='./event1.jpg'
              text='Event4'
              path='/4'
            />
            <EventItem
              src='./event2.jpg'
              text='Event5'
              path='/5'
            />
          </ul>
        </div>
      </div>
    </div>
        </>
    ); 
}