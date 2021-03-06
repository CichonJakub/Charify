import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import EventItem from './EventItem';
import './Homepage.css';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MainSection from './MainSection';

class AllEvents extends React.Component {
  state = {
    input_value: 0,
    charify_event: [],
    city: "dowolne",
    city_chosen: false,
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

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
    this.setState( {city_chosen: true});
  };

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

  checkDisplay = (single_event) => {
    if (!this.state.city_chosen) {
      return true
    }
    else if (this.state.city === "dowolne") {
      return true
    }
    else if (single_event.city === this.state.city) {
      return true
    }
    else {
      return false
    }
  }

  render() {

    // const single_event = this.state.charify_event
    let cities = [];
    let unique = [];
    return (
      <div>
        <MainSection/>
      <div className='main-back'>
        <div className='cards__container' style={{paddingTop:10}}>
          <FormControl variant="standard" sx={{ m: 5, size:"medium", width: 1,'& .MuiInputLabel-root':{fontSize:20}, '& .MuiSelect-select':{fontSize:20}}} id="form-search">
            <InputLabel id="demo-simple-select-helper-label" style={{fontSize:22}}>Wybierz miasto do odfiltrowania eventów</InputLabel>
            <Select style={{fontSize:24}}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={this.state.city}
              onChange={(e) => this.handleChange("city", e)}
              label="Wybierz miasto"
            >
              <MenuItem value="dowolne" id="form-search-item">
                dowolne
              </MenuItem >
              {this.state.charify_event.map((single_event) => (cities.push(single_event.city)))}
              {unique = cities.filter((x, i, a) => a.indexOf(x) === i)}
              {unique.map((city, index) => (<MenuItem id="form-search-item" key={index} value={city}>{city}</MenuItem>))}
            </Select>
          </FormControl>
          {/*<button
            type="button"
            className="flex-button"
            onClick={() => {
              this.setState({ city_chosen: true }, this.fetchData)
            }}>
            Wyświetl eventy z wybranego miasta
          </button>*/}


        </div>
        <div className="itemList">
          {this.state.charify_event.reverse().map((single_event) => (
            this.checkDisplay(single_event) ?
                <div key={single_event.id} id={single_event.id}>
                  <div className='cards' >
                  </div>
                  {single_event !== null ?
                    <div className='cards'>
                      <div className='cards__container'>
                        <div className='cards__wrapper'>
                          {/* <ul className='cards__items'> */}
                            <EventItem
                              //  src='./event1.jpg'
                              single_event={single_event} />
                          {/* </ul> */}
                        </div>
                      </div>
                    </div>
                    :
                    <div className='cards'>
                      {this.state.qid !== 0 ? <div > <h5>Rekord o wpisanym ID nie istnieje</h5> </div> : <div></div>}
                    </div>
                  }
                </div>
              
              : null
          ))}
        </div>
      </div>
      </div>
    )
  }
}


export default AllEvents;