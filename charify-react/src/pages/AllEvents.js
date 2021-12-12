import React from 'react'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import EventItem from './EventItem';
import './Homepage.css';
import axios from 'axios';

class AllEvents extends React.Component {
    state = {
        qid: parseInt(new URLSearchParams(window.location.search).get('key')) || 0,
        input_value: 0,
        charify_event: [],
        signed_in: false
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
    
    
    //   render() {

    //     const single_event = this.state.charify_event
    
    
//         return (
//         <div>
//             <div key={this.state.qid} id={this.state.qid}>
//             {single_event !== null ?
//             <div className='cards' >
//                 <div className='cards__container'>
//                     <div className='cards__wrapper'>
//                         <ul className='cards__items'>
//                             <EventItem
//                             src='./event1.jpg'
//                             text='Event1'
//                             path='/1'
//                             />
//                         </ul>
//                     </div>
//                 </div>
//                 </div>
//                 :
//                 <div className='cards'>
//                     {this.state.qid !==0 ? 
//                     <p>Aktualnie nie ma żadnego wydarzenia</p>
//                 <div/>:<div></div>}</div>
//                 }
//             </div>
//             </div>
//     )
// }
// }

render() {

    // const single_event = this.state.charify_event


    return this.state.charify_event.map((single_event) => (
      <div> 
        <div key={this.state.qid} id={this.state.qid}>
            <div className='cards' >
            </div>
                {single_event !== null ?
                
             <div className='cards'>
                 <div className='cards__container'>
                     <div className='cards__wrapper'>
                         <ul className='cards__items'>
                             <EventItem
                             src='./event1.jpg'
                             text={single_event.title}
                             path='/1'                             />
                         </ul>
                     </div>
                 </div> 
            </div>
            :
            <div className='cards'>
              {this.state.qid !== 0 ?
                <div >
                  <h5>Rekord o wpisanym ID nie istnieje</h5>
                </div>
                : <div></div>}              
            </div>
          }
        </div>
      </div>
    )
    )
}
}


export default AllEvents;
