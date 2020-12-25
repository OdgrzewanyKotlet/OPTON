import React from "react";

import optonLogo from "../../../assets/images/opton-logo.png";
import styles from "./Logo.module.css";

const logo = (props) => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={optonLogo} alt="Opton" />
  </div>
);

export default logo;
