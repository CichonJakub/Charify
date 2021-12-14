import "./SingleEvent.css";
import React from "react";
import axios from "axios";
import { Form } from "simple-react-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { Navigate } from 'react-router-dom';

class CustomForm extends React.Component {
  addHours = (date, h) => {
    date.setHours(date.getHours() + h);
    return date;
  };


  state = {
    title: null,
    description: null,
    address: null,
    organizer: null,
    organizer_type: null,
    phone_number: null,
    email: null,
    number_of_people: null,
    date: this.addHours(new Date(), 1).toISOString().slice(0, -8),
    tags: null,
    image: null,
    redirect: false,
  };

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  handleFormSubmit = (event, requestType, articleID) => {
    /*event.preventDefault();*/
    
    
    let postObj = 
    

    /*
    new FormData();
    
    postObj.append("title", this.state.title);
    postObj.append("description", this.state.description);
    postObj.append("address", this.state.address);
    postObj.append("organizer", this.state.organizer);
    postObj.append("organizer_type", this.state.organizer_type);
    postObj.append("phone_number", this.state.phone_number);
    postObj.append("email", this.state.email);
    postObj.append("number_of_people", this.state.number_of_people);
    postObj.append("date", this.state.date);
    postObj.append("tags", this.state.tags);
    //postObj.append("image", this.state.image);
    */{
      title: `${this.state.title}`,
      description: `${this.state.description}`,
      address: `${this.state.address}`,
      organizer: `${this.state.organizer}`,
      organizer_type: `${this.state.organizer_type}`,
      phone_number: `${this.state.phone_number}`,
      email: `${this.state.email}`,
      number_of_people: `${parseInt(this.state.number_of_people)}`,
      event_date: `${this.state.date}`,
      tags: `${this.state.tags}`,
    };


    if (requestType === "post") {
      
      return axios.post("/api/events/", postObj/*, {headers: {'Content-Type': 'multipart/form-data'}}*/)
      .then(this.setState({redirect: true}));
    } else if (requestType === "put") {
      return axios
        .put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
        .then((res) => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        });
    }
  };

  /* moze kiedys do uzycia zeby uzywac bezposrednio strefy czasowej
  convertTZ = (date, tzString) => {
    return new Date((typeof date === "string" 
    ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  }
  */
  render() {
    const redirecttohome = this.state.redirect;
        if (redirecttohome) {
            return <Navigate to="/" />
        }
    return (
      <div>
        <Form
          onSubmit={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <h1>Wypełnij formularz i zarejestruj swój event</h1>
          {/* title */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="title"
                label="Nazwa eventu"
                placeholder="podaj nazwę eventu"
                helperText="maksymalnie X znaków"
                value={this.state.title}
                onChange={(e) => this.handleChange("title", e)}
              />
            </FormControl>
          </div>

          {/* description */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="outline">
              <TextField  
                id="description"
                label="Opis"
                multiline
                rows={4}
                placeholder="podaj opis eventu"
                helperText="maksymalnie X znaków"
                value={this.state.description}
                onChange={(e) => this.handleChange("description", e)}
              />
            </FormControl>
          </div>

          {/* address */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="address"
                label="Adres"
                placeholder="podaj adres eventu"
                multiline
                helperText="maksymalnie X znaków"
                value={this.state.address}
                onChange={(e) => this.handleChange("address", e)}
              />
            </FormControl>
          </div>

          {/* organizer */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="organizer"
                label="Organizator"
                placeholder="podaj nazwę organizatora"
                helperText="maksymalnie X znaków"
                value={this.state.organizer}
                onChange={(e) => this.handleChange("organizer", e)}
              />{" "}
            </FormControl>

            {/* organizer_type */}

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="organizer_type"
                label="Typ organizatora"
                placeholder="podaj typ organizatora"
                helperText="maksymalnie X znaków"
                value={this.state.organizer_type}
                onChange={(e) => this.handleChange("organizer_type", e)}
              />
            </FormControl>
          </div>

          {/* phone_number */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                type="number"
                id="phone_number"
                label="Numer telefonu"
                placeholder="podaj numer kontaktowy"
                helperText="9 cyfr, bez dodatkowych znaków"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 9);
                }}
                value={this.state.phone_number}
                onChange={(e) => this.handleChange("phone_number", e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+48</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>

          {/* email */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="email"
                label="Email"
                placeholder="podaj adres email"
                helperText="maksymalnie X znaków"
                value={this.state.email}
                onChange={(e) => this.handleChange("email", e)}
              />
            </FormControl>
          </div>

          {/* number_of_people */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                type="number"
                id="number_of_people"
                label="Liczba potrzebnych osób"
                placeholder="podaj liczbę potrzebnych osób"
                helperText="max 99"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 2);
                }}
                value={this.state.number_of_people}
                onChange={(e) => this.handleChange("number_of_people", e)}
              />
            </FormControl>
          </div>

          {/* date */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                focused
                color="grey"
                id="datetime"
                label="Data i czas wydarzenia"
                type="datetime-local"
                defaultValue={this.addHours(new Date(), 1)
                  .toISOString()
                  .slice(0, -8)}
                value={this.state.date}
                onChange={(e) => this.handleChange("date", e)}
              />
            </FormControl>
          </div>

          {/* tags */}
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="tags"
                label="Tagi"
                placeholder="podaj tagi"
                helperText="maksymalnie X znaków"
                value={this.state.tags}
                onChange={(e) => this.handleChange("tags", e)}
              />
            </FormControl>
          </div>

        {/* photo 
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField
                id="photo"
                focused
                color="grey"
                label="Zdjęcie eventu"
                type="file"
                helperText="maksymalnie 3 MB, format: .jpg lub .png"
                value={this.state.image}
                onChange={(e) => this.handleChange("image", e)}
              />
            </FormControl>
          </div>*/}

          <div className="task-wrapper flex-wrapper">
            <button type="primary" htmlType="submit" className="flex-button">
              WYŚLIJ
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
