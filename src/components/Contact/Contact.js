import React, { Component } from "react";
import Form from "./Form/Form";
import BasicSection from "../BasicSection/BasicSection";
import styles from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <BasicSection className={styles.Form}>
        <Form />
      </BasicSection>
    );
  }
}

export default Contact;
