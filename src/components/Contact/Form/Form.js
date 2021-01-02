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
    age: 0,
  };

  formSendHandler = () => {};
  topicSelectChangedHandler = (event) => {
    const newState = {
      ...this.state,
    };

    newState.topic = event.target.value;

    this.setState({ topic: newState.topic });
    console.log(event.target.value);
    console.log(this.state.topic);
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
          <InputLabel id="topic-select-label">Temat wiadomości</InputLabel>
          <Select
            labelId="topic-select-label"
            id="topic-select"
            value={this.state.topic}
            onChange={this.topicSelectChangedHandler}
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
        />
        <TextField
          required
          className={styles.InputField}
          id="name"
          label="Nazwisko"
          variant="filled"
        />
        <TextField
          required
          className={styles.InputField}
          id="name"
          label="E-mail"
          variant="filled"
        />
        <TextField
          className={styles.InputField}
          id="name"
          label="Numer kontaktowy"
          variant="filled"
        />
        <TextField
          required
          className={styles.InputField}
          id="content"
          label="Treść wiadomości"
          placeholder=""
          multiline
          variant="outlined"
        />
        <Button customClass={styles.Button}>WYŚLIJ</Button>
      </form>
    );
  }
}

export default Form;
