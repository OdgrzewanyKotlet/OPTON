import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Form extends Component {
  state = {
    topic: "electricity",
    name: "",
    surname: "",
    email: "",
    telephone: "",
    content: "",
    status: null,
    topicMap: {
      electricity: "Instalacje elektryczne",
      photovoltaics: "Fotowoltaika",
      alarms: "Instalacje alarmowe",
      other: "Inne",
    },
  };

  formSendHandler = async (event) => {
    console.log("SENDING!");
    event.preventDefault();
    this.setState({ status: "Sending..." });

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

    this.setState({ status: "Submit..." });
    let result = await response.json();
    alert(result.status);
  };

  inputChangedHandler = (event, id) => {
    const newState = {
      ...this.state,
    };

    newState[id] = event.target.value;

    this.setState(newState);
  };

  render() {
    return (
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
        <Button customClass={styles.Button}>WYŚLIJ</Button>
      </ValidatorForm>
    );
  }
}

export default Form;
