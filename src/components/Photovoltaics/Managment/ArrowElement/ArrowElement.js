import React from "react";

import styles from "./ArrowElement.module.css";
import ArrowImage from "../../../../assets/images/right-arrow.svg";

const arrowElement = (props) => (
  <div className={styles.ArrowElement}>
    <div className={styles.ArrowSection}>
      <img src={ArrowImage} alt="Opton" className={styles.ArrowImage} />
    </div>
    <div className={styles.TextSection}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

export default arrowElement;
