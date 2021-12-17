import "./SingleEvent.css";
import React from "react";
import axios from "axios";
import { Form } from "simple-react-form";
import TextField from "@mui/material/TextField";
import { Box, FormControl, FormLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

class CustomForm extends React.Component {
  addHours = (date, h) => {
    date.setHours(date.getHours() + h);
    return date;
  };


  state = {
    title: null,
    description: null,
    street: null,
    city: null,
    organizer: null,
    organizer_type: null,
    phone_number: null,
    email: null,
    number_of_people: null,
    date: this.addHours(new Date(), 1).toISOString().slice(0, -8),
    tags: null,
    image: null,

    redirect: false,

    errors: [],
  };

  handleValidation() {
    let errors = this.state.errors;
    let formIsValid = true;

    //title
    if (typeof this.state.title !== "undefined") {
      if (this.state.title.length < 10) {
        formIsValid = false;
        errors["title"] = "Nazwa jest za krótka";
      }
    }

    //description
    if (typeof this.state.description !== "undefined") {
      if (this.state.description.length < 20) {
        formIsValid = false;
        errors["description"] = "Opis jest za krótki";
      }
    }

    //address
    {
      if (typeof this.state.street !== "undefined") {
        if (!this.state.street.match(/^(.+)\s(\S+)$/)) {
          formIsValid = false;
          errors["street"] = "Adres powinien być postaci: <nazwa ulicy> <numer>";
        } else if (this.state.street.length < 2) {
          formIsValid = false;
          errors["street"] = "Nazwa jest za krótka";
        }
      }

      if (typeof this.state.city !== "undefined") {
        if (!this.state.city.match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["city"] = "Tylko litery";
        } else if (this.state.city.length < 3) {
          formIsValid = false;
          errors["city"] = "Nazwa jest za krótka";
        }
      }
    }

    //organizer
    if (typeof this.state.organizer !== "undefined") {
      if (this.state.organizer.length < 3) {
        formIsValid = false;
        errors["organizer"] = "Nazwa jest za krótka";
      }
    }

    //organizer_type
    if (typeof this.state.organizer_type !== "undefined") {
      if (!this.state.organizer_type.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["organizer_type"] = "Tylko litery";
      } else if (this.state.organizer_type.length < 3) {
        formIsValid = false;
        errors["organizer_type"] = "Nazwa jest za krótka";
      }
    }

    //phone_number
    if (typeof this.state.phone_number !== "undefined") {
      if (this.state.phone_number.length !== 9) {
        formIsValid = false;
        errors["phone_number"] = "Numer jest za krótki, podaj 9 cyfr";
      }
    }

    //email
    {
      if (typeof this.state.email !== "undefined") {
        let lastAtPos = this.state.email.lastIndexOf("@");
        let lastDotPos = this.state.email.lastIndexOf(".");

        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            this.state.email.indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            this.state.email.length - lastDotPos > 1
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email nie jest prawidłowy";
        }
      }
    }

    //number_of_people
    if (typeof this.state.number_of_people !== "undefined") {
      if (this.state.number_of_people == 0) {
        formIsValid = false;
        errors["number_of_people"] = "Podaj liczbę potrzebnych osób. Większą od 0 :)";
      }
    }

    //tags
    if (typeof this.state.tags !== "undefined") {
      if (this.state.tags.length < 4) {
        formIsValid = false;
        errors["tags"] = "Tekst jest za krótki";
      }
    }


    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  handleTags = (field) => {
    let tag_arr = field.split(" ");
    let edited_tags = null;
    tag_arr.map((tag) => {
      if (tag[0] !== "#") {
        tag = "#" + tag;
      }
      if (edited_tags !== null) {
        edited_tags = edited_tags + " " + tag;
      } else {
        edited_tags = tag;
      }
    })
    return edited_tags;
  }


  handleFormSubmit = (event, requestType, articleID) => {
    /*event.preventDefault();*/

    if (this.handleValidation()) {
      alert("Formularz został prawidłowo przesłany. Wróć na stronę główną.");


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
        //street: `${this.state.street}`,
        //city: `${this.state.city}`,
        address: `${this.state.city}`,
        organizer: `${this.state.organizer}`,
        organizer_type: `${this.state.organizer_type}`,
        phone_number: `${this.state.phone_number}`,
        email: `${this.state.email}`,
        number_of_people: `${parseInt(this.state.number_of_people)}`,
        event_date: `${this.state.date}`,
        tags: this.handleTags(this.state.tags),
      };


      if (requestType === "post") {

        return axios.post("/api/events/", postObj/*, {headers: {'Content-Type': 'multipart/form-data'}}*/)
          .then((res) => {
            if (res.status === 201) {
              this.setState({ redirect: true });
            } else {
              this.setState({ redirect: false });
            }
          });
      } else if (requestType === "put") {
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
          .then((res) => {
            if (res.status === 200) {
              this.props.history.push(`/`);
            }
          });
      }
    } else {
      alert("Formularz jest błędnie wypełniony - popraw błędy i spróbuj ponownie.");
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
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard" >
              <TextField InputLabelProps={{ required: false }} //required
                id="title"
                label="Nazwa eventu"
                placeholder="podaj nazwę eventu"
                error={this.state.errors["title"]}
                helperText={this.state.errors["title"] ? this.state.errors["title"] : "maksymalnie X znaków"}
                value={this.state.title}
                onChange={(e) => this.handleChange("title", e)}
                inputProps={{
                  maxLength: 150,
                }}
              />
            </FormControl>
          </div>

          {/* description */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                id="description"
                label="Opis"
                multiline
                rows={4}
                placeholder="podaj opis eventu"
                error={this.state.errors["description"]}
                helperText={this.state.errors["description"] ? this.state.errors["description"] : "maksymalnie X znaków"}
                value={this.state.description}
                onChange={(e) => this.handleChange("description", e)}
              />
            </FormControl>
          </div>

          {/* address */}
          <div className="form_container">
            <Box component="form" sx={{ width: 1.0, display: 'flex', flexWrap: 'nowrap' }}>
              <FormControl sx={{ m: 1, float: 'left', width: 0.5 }} variant="standard">
                <FormLabel>Adres</FormLabel>
                <TextField InputLabelProps={{ required: false }} //required
                  id="street"
                  label="Ulica, numer domu/mieszkania"
                  placeholder="podaj nazwę ulicy, oraz numer domu/mieszkania"
                  error={this.state.errors["street"]}
                  helperText={this.state.errors["street"] ? this.state.errors["street"] : "maksymalnie 40 znaków"}
                  value={this.state.street}
                  onChange={(e) => this.handleChange("street", e)}
                  inputProps={{
                    maxLength: 40,
                  }} />
              </FormControl>
              <FormControl sx={{ m: 1, width: 0.5 }} variant="standard">
                <FormLabel>&nbsp;</FormLabel>
                <TextField InputLabelProps={{ required: false }} //required
                  id="city"
                  label="Miejscowość"
                  placeholder="podaj nazwę miejscowości"
                  error={this.state.errors["city"]}
                  helperText={this.state.errors["city"] ? this.state.errors["city"] : "maksymalnie 20 znaków"}
                  value={this.state.city}
                  onChange={(e) => this.handleChange("city", e)}
                  inputProps={{
                    maxLength: 20,
                  }} />
              </FormControl>
            </Box>
          </div>

          {/* organizer */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                id="organizer"
                label="Organizator"
                placeholder="podaj nazwę organizatora"
                error={this.state.errors["organizer"]}
                helperText={this.state.errors["organizer"] ? this.state.errors["organizer"] : "maksymalnie X znaków"}
                value={this.state.organizer}
                onChange={(e) => this.handleChange("organizer", e)}
                inputProps={{
                  maxLength: 150,
                }}
              />
            </FormControl>
          </div>

          {/* organizer_type */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                id="organizer_type"
                label="Typ organizatora"
                placeholder="podaj typ organizatora"
                error={this.state.errors["organizer_type"]}
                helperText={this.state.errors["organizer_type"] ? this.state.errors["organizer_type"] : "maksymalnie X znaków"}
                value={this.state.organizer_type}
                onChange={(e) => this.handleChange("organizer_type", e)}
                inputProps={{
                  maxLength: 150,
                }}
              />
            </FormControl>
          </div>

          {/* phone_number */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                type="number"
                id="phone_number"
                label="Numer telefonu"
                placeholder="podaj numer kontaktowy"
                error={this.state.errors["phone_number"]}
                helperText={this.state.errors["phone_number"] ? this.state.errors["phone_number"] : "9 cyfr, bez dodatkowych znaków"}
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
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} required
                id="email"
                label="Email"
                placeholder="podaj adres email"
                error={this.state.errors["email"]}
                helperText={this.state.errors["email"] ? this.state.errors["email"] : "maksymalnie X znaków"}
                value={this.state.email}
                onChange={(e) => this.handleChange("email", e)}
              />
            </FormControl>
          </div>

          {/* number_of_people */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                type="number"
                id="number_of_people"
                label="Liczba potrzebnych osób"
                placeholder="podaj liczbę potrzebnych osób"
                error={this.state.errors["number_of_people"]}
                helperText={this.state.errors["number_of_people"] ? this.state.errors["number_of_people"] : "max 999"}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
                value={this.state.number_of_people}
                onChange={(e) => this.handleChange("number_of_people", e)}
              />
            </FormControl>
          </div>

          {/* date - zablokowac dodawanie daty wczesniejszej niz "teraz" */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                focused
                color="grey"
                id="datetime"
                label="Data i czas wydarzenia"
                type="datetime-local"
                //defaultValue={this.addHours(new Date(), 1)
                //  .toISOString()
                //  .slice(0, -8)}
                value={this.state.date}
                onChange={(e) => this.handleChange("date", e)}
              />
            </FormControl>
          </div>

          {/* tags */}
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} //required
                id="tags"
                label="Tagi"
                placeholder="podaj tagi"
                error={this.state.errors["tags"]}
                helperText={this.state.errors["tags"] ? this.state.errors["tags"] : "maksymalnie X znaków"}
                value={this.state.tags}
                onChange={(e) => this.handleChange("tags", e)}
                inputProps={{
                  maxLength: 150,
                }}
              />
            </FormControl>
          </div>

          {/* photo - todo
          <div className="form_container">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <TextField InputLabelProps={{ required: false }} required
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
