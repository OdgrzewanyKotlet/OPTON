import React from "react";

import styles from "./MeaConsulting.module.css";
import MeaLogo from "../../../assets/images/mea-logo.png";

const meaConsulting = (props) => (
  <div className={styles.MeaConsulting}>
    <a
      href="https://meaconsulting.pl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={MeaLogo} alt="MEA Consulting" className={styles.MeaLogo} />
    </a>
  </div>
);

export default meaConsulting;
