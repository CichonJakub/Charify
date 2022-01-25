import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './Homepage.css';
import './GetEvents.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class GetEvents extends React.Component {
    state = {
        input_value: 0,
        charify_event: [],
        id: this.props.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        let data;
        axios
            .get(`api/events/`)
            .then((res) => {
                data = res.data;
                this.setState({
                    charify_event: data,
                });
            })
            .catch((err) => { });
    }

    checkIfUserSigned(users, id) {
        console.log(users)
        console.log(id)
        const event_users = users.split(",");
        if (event_users.includes(id.toString())) {
            return true;
        }
    }
    getDatetime(event_date){
        const datetime = event_date.slice(0,10)+ "    " + event_date.slice(11,-4);
        return datetime;
    }

    render() {

        return (
            <div className='container'>
                {this.state.charify_event.reverse().map((single_event) => (
                    <div key={single_event.id} id={single_event.id}>
                        <div className='containter' >
                        </div>
                        {this.checkIfUserSigned(single_event.users, this.state.id) ?
                            <div className='cards'>
                                <div className='cards__container'>
                                    <div className="itemList2">
                                        <li className='cards__item'>
                                            <Link className='cards__item__link' to={'/events/' + single_event.id} state={{ single_event: single_event }}>
                                                <div className='cards__item__info'>
                                                    <h5 className='cards__item__text'>{single_event.title}</h5>
                                                    <h2 className='cards__item__text__date'>{this.getDatetime(single_event.event_date)}</h2>
                                                    <figure className='cards__item__pic-wrap'>
                                                        <img
                                                        className='cards__item__img'
                                                        alt='event'
                                                        src={single_event.photo}
                                                        />
                                                    </figure>
                                                </div>
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                ))}
            </div>

        )
    }
}
export default GetEvents;