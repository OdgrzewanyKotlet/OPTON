import React from "react";

import imgCircleLogo from "../../../assets/images/optonlogo-circle.png";
import styles from "./CircleLogo.module.css";

const circleLogo = (props) => (
  <div className={styles.CircleLogo}>
    <img src={imgCircleLogo} alt="Opton" />
  </div>
);

export default circleLogo;
