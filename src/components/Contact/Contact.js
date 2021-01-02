import React, { Component } from "react";

import styles from "./Contact.module.css";
import BasicSection from "../BasicSection/BasicSection";

class Contact extends Component {
  render() {
    return (
      <BasicSection customClass={styles.Info}>
        <center>
          <p className={styles.SmallInfo}>TELEFON</p>
          <p className={styles.BigInfo}>+48 600 668 695</p>
          <p className={styles.SmallInfo}>E-MAIL</p>
          <p className={styles.BigInfo}>biuro@opton.net.pl</p>
          <p className={styles.SmallInfo}>ADRES</p>
          <p className={styles.Address}>
            ul. Ks. A. Kordeckiego 34/4, Bydgoszcz 85-225
          </p>
        </center>
      </BasicSection>
    );
  }
}

export default Contact;
