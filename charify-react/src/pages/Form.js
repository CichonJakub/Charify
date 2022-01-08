import React from "react";
import axios from "axios";
import { Form } from "simple-react-form";
import TextField from "@mui/material/TextField";
import {FormControl, FormLabel} from "@mui/material";
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
    photo: null,

    redirect: false,

    errors: [],
  };

  handleValidation() {
    let errors = this.state.errors;
    let formIsValid = true;

    //title
    errors["title"] = null;
    if (this.state.title !== null) {
      if (this.state.title.length < 10) {
        formIsValid = false;
        errors["title"] = "Nazwa jest za krótka";
      }
    }

    //description
    errors["description"] = null;
    if (this.state.description !== null) {
      if (this.state.description.length < 20) {
        formIsValid = false;
        errors["description"] = "Opis jest za krótki";
      }
    }

    //address
    errors["street"] = null;
    if (this.state.street !== null) {
      if (!this.state.street.match(/^(.+)\s(\S+)$/)) {
        formIsValid = false;
        errors["street"] = "Adres powinien być postaci: <nazwa ulicy> <numer>";
      } else if (this.state.street.length < 2) {
        formIsValid = false;
        errors["street"] = "Nazwa jest za krótka";
      }
    }

    errors["city"] = null;
    if (this.state.city !== null) {
      if (!this.state.city.match(/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/)) {
        formIsValid = false;
        errors["city"] = "Tylko litery";
      } else if (this.state.city.length < 3) {
        formIsValid = false;
        errors["city"] = "Nazwa jest za krótka";
      }
    }


    //organizer
    errors["organizer"] = null;
    if (this.state.organizer !== null) {
      if (this.state.organizer.length < 3) {
        formIsValid = false;
        errors["organizer"] = "Nazwa jest za krótka";
      }
    }

    //organizer_type
    errors["organizer_type"] = null;
    if (this.state.organizer_type !== null) {
      if (!this.state.organizer_type.match(/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/)) {
        formIsValid = false;
        errors["organizer_type"] = "Tylko litery";
      } else if (this.state.organizer_type.length < 3) {
        formIsValid = false;
        errors["organizer_type"] = "Nazwa jest za krótka";
      }
    }

    //phone_number
    errors["phone_number"] = null;
    if (this.state.phone_number !== null) {
      if (this.state.phone_number.length !== 9) {
        formIsValid = false;
        errors["phone_number"] = "Numer jest za krótki, podaj 9 cyfr";
      }
    }

    //email
    errors["email"] = null;
    if (this.state.email !== null) {
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


    //number_of_people
    errors["number_of_people"] = null;
    if (this.state.number_of_people !== null) {
      if (this.state.number_of_people < 1) {
        formIsValid = false;
        errors["number_of_people"] = "Podaj liczbę potrzebnych osób. Większą od 0 :)";
      }
    }

    //date
    errors["date"] = null;
    if (this.state.date !== null) {
      const date_now = this.addHours(new Date(), 1).toISOString().slice(0, 10);
      const hours_now = parseInt(this.addHours(new Date(), 1).toISOString().slice(0, -8).slice(-5, -3)); // .slice(-13, -11)
      const minutes_now = parseInt(this.addHours(new Date(), 1).toISOString().slice(0, -8).slice(-2)); // .slice(-10, -8)
      const date_form = this.state.date.slice(0, 10);
      const hours_form = parseInt(this.state.date.slice(-5, -3));
      const minutes_form = parseInt(this.state.date.slice(-2));
      if (date_now === date_form) {
        if (hours_now > hours_form) {
          formIsValid = false;
          errors["date"] = "Nie możesz wstawić eventu z przeszłości :)";
        } else if (hours_now === hours_form) {
          if (minutes_now >= minutes_form) {
            formIsValid = false;
            errors["date"] = "Nie możesz wstawić eventu z przeszłości :)";
          } else if ((minutes_form - 30) < minutes_now) {
            formIsValid = false;
            errors["date"] = "Data jest prawidłowa, ale daj przynajmniej pół godziny na zapisy :)";
          }
        }
      }
    }

    //tags
    errors["tags"] = null;
    if (this.state.tags !== null) {
      if (this.state.tags.length < 4) {
        formIsValid = false;
        errors["tags"] = "Tekst jest za krótki";
      }
    }

    //photo
    errors["photo"] = null;
    if (this.state.photo !== null) {
      if (!this.state.photo.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        formIsValid = false;
        errors["photo"] = "Dodaj obrazek w jednym z formatów: .jpg/.jpeg/.png/.gif";
      }
      if (this.state.photo.size > 3145728) {
        formIsValid = false;
        errors["photo"] = "Plik jest za duży, maskymalny rozmiar: 3MB";
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

  parsePhoneNumber = (field) => {
    let parsed_number = "+48 " + field.toString().slice(0, 3) + "-" + field.toString().slice(3, 6) + "-" + field.toString().slice(6, 9);
    return parsed_number;
  }

  handleFileInput = (e) => {
    this.setState({ photo: e.target.files[0] });
  }

  handleFormSubmit = (event, requestType, articleID) => {
    /*event.preventDefault();*/

    if (this.handleValidation()) {
      alert("Formularz został prawidłowo przesłany. Wróć na stronę główną.");


      let postObj = new FormData();

      postObj.append("title", this.state.title);
      postObj.append("description", this.state.description);
      postObj.append("street", this.state.street);
      postObj.append("city", this.state.city)
      postObj.append("organizer", this.state.organizer);
      postObj.append("organizer_type", this.state.organizer_type);
      postObj.append("phone_number", this.parsePhoneNumber(this.state.phone_number));
      postObj.append("email", this.state.email);
      postObj.append("number_of_people", parseInt(this.state.number_of_people));
      postObj.append("event_date", this.state.date);
      postObj.append("tags", this.handleTags(this.state.tags));
      postObj.append("photo", this.state.photo);



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
        <div className="container">
          <div className="task-container">
            <div className="form-wrapper" align="center">
              <Form
                  className="form_wrapper"
                  class="w-75 p-3"
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
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard" >
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14, shrink:true},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}
                               id="title"
                               label="Nazwa eventu"
                               placeholder="podaj nazwę eventu"
                               key="abc"
                               error={this.state.errors["title"]}
                               helperText={this.state.errors["title"] ? this.state.errors["title"] : "maksymalnie 50 znaków"}
                               value={this.state.title}
                               size="medium"
                               onChange={(e) => this.handleChange("title", e)}
                    />
                  </FormControl>
                </div>

                {/* description */}
                <div>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}
                               id="description"
                               label="Opis"
                               multiline
                               rows={4}
                               placeholder="podaj opis eventu"
                               error={this.state.errors["description"]}
                               helperText={this.state.errors["description"] ? this.state.errors["description"] : "maksymalnie 1000 znaków"}
                               value={this.state.description}
                               onChange={(e) => this.handleChange("description", e)}
                               inputProps={{
                                 maxLength: 1000,
                               }}
                    />
                  </FormControl>
                </div>

                {/* address */}

                <div class="row">
                  <div class="col">
                    <FormControl sx={{ m: 1, float: 'left', width: 1 }} variant="standard">
                      <FormLabel sx={{textAlign: 'left', ml: 2, fontSize:14, mb:1}}>Adres</FormLabel>
                      <TextField InputLabelProps={{ required: false }} required
                                 sx={{
                                   '& .MuiFormHelperText-root':{fontSize:10},
                                   '& .MuiInputLabel-root':{fontSize:14},
                                   '& .MuiOutlinedInput-root':{fontSize:14}
                                 }}
                                 id="street"
                                 label="Ulica, numer domu/mieszkania"
                                 placeholder="podaj nazwę ulicy, oraz numer domu/mieszkania"
                                 error={this.state.errors["street"]}
                                 helperText={this.state.errors["street"] ? this.state.errors["street"] : "maksymalnie 40 znaków"}
                                 value={this.state.street}
                                 onChange={(e) => this.handleChange("street", e)}
                                 inputProps={{
                                   /*startAdornment: (
                                     <InputAdornment position="start">ul.</InputAdornment>
                                   ),*/
                                   maxLength: 40,
                                 }}
                      />
                    </FormControl>
                  </div>
                  <div class="col">
                    <FormControl sx={{ m: 1, width: 1 }} variant="standard">
                      <FormLabel sx={{fontSize:14, mb:1}}>&nbsp;</FormLabel>
                      <TextField InputLabelProps={{ required: false }} required
                                 sx={{
                                   '& .MuiFormHelperText-root':{fontSize:10},
                                   '& .MuiInputLabel-root':{fontSize:14},
                                   '& .MuiOutlinedInput-root':{fontSize:14}
                                 }}

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
                  </div>
                </div>

                {/* organizer */}
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               id="organizer"
                               label="Organizator"
                               placeholder="podaj nazwę organizatora"
                               error={this.state.errors["organizer"]}
                               helperText={this.state.errors["organizer"] ? this.state.errors["organizer"] : "maksymalnie 50 znaków"}
                               value={this.state.organizer}
                               onChange={(e) => this.handleChange("organizer", e)}
                               inputProps={{
                                 maxLength: 50,
                               }}
                    />
                  </FormControl>
                </div>

                {/* organizer_type */}
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               id="organizer_type"
                               label="Typ organizatora"
                               placeholder="podaj typ organizatora"
                               error={this.state.errors["organizer_type"]}
                               helperText={this.state.errors["organizer_type"] ? this.state.errors["organizer_type"] : "maksymalnie 30 znaków"}
                               value={this.state.organizer_type}
                               onChange={(e) => this.handleChange("organizer_type", e)}
                               inputProps={{
                                 maxLength: 30,
                               }}
                    />
                  </FormControl>
                </div>

                {/* phone_number */}
                <div>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

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
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               id="email"
                               label="Email"
                               placeholder="podaj adres email"
                               error={this.state.errors["email"]}
                               helperText={this.state.errors["email"] ? this.state.errors["email"] : "maksymalnie 30 znaków"}
                               value={this.state.email}
                               onChange={(e) => this.handleChange("email", e)}
                               inputProps={{
                                 maxLength: 30,
                               }}
                    />
                  </FormControl>
                </div>

                {/* number_of_people */}
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

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
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:16},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               focused
                               color="grey"
                               id="datetime"
                               label="Data i czas wydarzenia"
                               type="datetime-local"
                        //defaultValue={this.addHours(new Date(), 1)
                        //  .toISOString()
                        //  .slice(0, -8)}
                               error={this.state.errors["date"]}
                               helperText={this.state.errors["date"] ? this.state.errors["date"] : null}
                               value={this.state.date}
                               onChange={(e) => this.handleChange("date", e)}
                               inputProps={{ min: new Date().toISOString().slice(0, 11) + "00:00" }}
                    />
                  </FormControl>
                </div>

                {/* tags */}
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:14},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               id="tags"
                               label="Tagi"
                               placeholder="podaj tagi"
                               error={this.state.errors["tags"]}
                               helperText={this.state.errors["tags"] ? this.state.errors["tags"] : "maksymalnie 100 znaków"}
                               value={this.state.tags}
                               onChange={(e) => this.handleChange("tags", e)}
                               inputProps={{
                                 maxLength: 100,
                               }}
                    />
                  </FormControl>
                </div>

                {/* photo */}
                <div >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField InputLabelProps={{ required: false }} required
                               sx={{
                                 '& .MuiFormHelperText-root':{fontSize:10},
                                 '& .MuiInputLabel-root':{fontSize:16},
                                 '& .MuiOutlinedInput-root':{fontSize:14}
                               }}

                               id="photo"
                               focused
                               color="grey"
                               label="Zdjęcie eventu"
                               type="file"
                               error={this.state.errors["photo"]}
                               helperText={this.state.errors["photo"] ? this.state.errors["photo"] : "maksymalnie 3 MB, format: .jpg, .jpeg, .png lub .gif"}
                               onChange={(this.handleFileInput)}
                    />
                  </FormControl>
                </div>

                <div className="task-wrapper flex-wrapper">
                  <button type="primary" htmlType="submit" className="flex-button">
                    WYŚLIJ
                  </button>
                </div>
              </Form>

            </div>

          </div>

        </div>
    );
  }
}

export default CustomForm;
