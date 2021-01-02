import React, { Component } from "react";
import Form from "./Form/Form";
import BasicSection from "../BasicSection/BasicSection";
import styles from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <BasicSection customClass={styles.Form}>
        <h1>Formularz kontaktowy</h1>
        DAJ ZNAĆ CZEGO POTRZEBUJESZ!
        <Form />
      </BasicSection>
    );
  }
}

export default Contact;
