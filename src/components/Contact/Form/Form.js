import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "../../UI/Button/Button";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    topic: "electricity",
    name: "",
    surname: "",
    email: "",
    telephone: "",
    content: "",
  };

  formSendHandler = () => {};

  inputChangedHandler = (event, id) => {
    const newState = {
      ...this.state,
    };

    newState[id] = event.target.value;

    this.setState(newState);
  };

  render() {
    return (
      <form
        className={styles.Form}
        noValidate
        autoComplete="off"
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

        <TextField
          required
          className={styles.InputField}
          id="name"
          label="Imię"
          variant="filled"
          onChange={(event) => this.inputChangedHandler(event, "name")}
        />
        <TextField
          required
          className={styles.InputField}
          id="surname"
          label="Nazwisko"
          variant="filled"
          onChange={(event) => this.inputChangedHandler(event, "surname")}
        />
        <TextField
          required
          className={styles.InputField}
          id="email"
          label="E-mail"
          variant="filled"
          onChange={(event) => this.inputChangedHandler(event, "email")}
        />
        <TextField
          className={styles.InputField}
          id="telephone"
          label="Numer kontaktowy"
          variant="filled"
          onChange={(event) => this.inputChangedHandler(event, "telephone")}
        />
        <TextField
          required
          className={styles.InputField}
          id="content"
          label="Treść wiadomości"
          placeholder=""
          multiline
          variant="outlined"
          onChange={(event) => this.inputChangedHandler(event, "content")}
        />
        <Button customClass={styles.Button}>WYŚLIJ</Button>
      </form>
    );
  }
}

export default Form;
