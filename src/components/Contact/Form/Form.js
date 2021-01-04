import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";
import Loader from "react-loader-spinner";
import Fade from "react-reveal/Fade";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ReCAPTCHA from "react-google-recaptcha";

class Form extends Component {
  state = {
    topic: "electricity",
    name: "",
    surname: "",
    email: "",
    telephone: "",
    content: "",
    topicMap: {
      electricity: "Instalacje elektryczne",
      photovoltaics: "Fotowoltaika",
      alarms: "Instalacje alarmowe",
      other: "Inne",
    },
    loading: false,
    send: false,
    captchaVerified: false,
  };

  formSendHandler = async (event) => {
    if (this.state.captchaVerified) {
      this.setState({ loading: true });
      event.preventDefault();

      let details = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        telephone: this.state.telephone,
        content: this.state.content,
        topic: this.state.topicMap[this.state.topic],
      };

      let response = await fetch("http://localhost:5000/contactsend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      let result = await response.json();
      if (result.status === "OK") {
        this.setState({ send: true, loading: false });
      }
    } else {
      alert("CAPTCHA FAILED!");
    }
  };

  inputChangedHandler = (event, id) => {
    const newState = {
      ...this.state,
    };

    newState[id] = event.target.value;

    this.setState(newState);
  };

  captchaVerificationHandler = () => {
    this.setState({ captchaVerified: true });
  };

  render() {
    let captcha = (
      <div className={styles.ReCaptcha}>
        <ReCAPTCHA
          sitekey="6Lc_gyAaAAAAABLZozWuoypaTpS2g0CCeAIe7cMn"
          onChange={this.captchaVerificationHandler}
          hl="pl"
        />
      </div>
    );

    let form = (
      <React.Fragment>
        <center>
          <h1 className={styles.Title}>Formularz kontaktowy</h1>
          <p className={styles.Content}>DAJ ZNAĆ CZEGO POTRZEBUJESZ!</p>
        </center>
        <ValidatorForm
          className={styles.Form}
          ref="form"
          onError={(errors) => console.log(errors)}
          onSubmit={this.formSendHandler}
        >
          <FormControl required variant="filled" className={styles.InputField}>
            <InputLabel id="topic-label">Temat wiadomości</InputLabel>
            <Select
              labelId="topic-label"
              id="topic"
              value={this.state.topic}
              onChange={(event) => this.inputChangedHandler(event, "topic")}
            >
              <MenuItem value="electricity">Instalacje elektryczne</MenuItem>
              <MenuItem value="photovoltaics">Fotowoltaika</MenuItem>
              <MenuItem value="alarms">Instalacje alarmowe</MenuItem>
              <MenuItem value="other">Inne</MenuItem>
            </Select>
          </FormControl>

          <TextValidator
            className={styles.InputField}
            id="name"
            label="Imię *"
            variant="filled"
            value={this.state.name}
            onChange={(event) => this.inputChangedHandler(event, "name")}
            validators={["required"]}
            errorMessages={["To pole jest wymagane"]}
          />
          <TextValidator
            className={styles.InputField}
            id="surname"
            label="Nazwisko *"
            variant="filled"
            value={this.state.surname}
            onChange={(event) => this.inputChangedHandler(event, "surname")}
            validators={["required"]}
            errorMessages={["To pole jest wymagane"]}
          />

          <TextValidator
            className={styles.InputField}
            id="email"
            label="E-mail *"
            variant="filled"
            value={this.state.email}
            onChange={(event) => this.inputChangedHandler(event, "email")}
            validators={["required", "isEmail"]}
            errorMessages={[
              "To pole jest wymagane",
              "Adres email jest niepoprawny",
            ]}
          />

          <TextField
            className={styles.InputField}
            id="telephone"
            label="Numer kontaktowy"
            variant="filled"
            value={this.state.telephone}
            onChange={(event) => this.inputChangedHandler(event, "telephone")}
          />

          <TextValidator
            className={styles.InputField}
            id="content"
            label="Treść wiadomości *"
            placeholder=""
            multiline
            variant="outlined"
            value={this.state.content}
            onChange={(event) => this.inputChangedHandler(event, "content")}
            validators={["required"]}
            errorMessages={["To pole jest wymagane"]}
          />
          {captcha}
          <center>
            <Button
              customClass={styles.Button}
              disabled={!this.state.captchaVerified}
            >
              WYŚLIJ
            </Button>
          </center>
        </ValidatorForm>
      </React.Fragment>
    );

    if (this.state.send) {
      form = (
        <Fade top duration={8000}>
          <div className={styles.SuccessInfo}>
            <center>
              <h2>Dziękujemy za wiadomość!</h2>
              <p>Odezwiemy się niebawem</p>
              <hr />
            </center>
          </div>
        </Fade>
      );
    }

    if (this.state.loading) {
      form = (
        <Fade duration={3000}>
          <center>
            <Loader type="ThreeDots" color="#314089" height={150} width={150} />
          </center>
        </Fade>
      );
    }
    return <React.Fragment>{form}</React.Fragment>;
  }
}

export default Form;
