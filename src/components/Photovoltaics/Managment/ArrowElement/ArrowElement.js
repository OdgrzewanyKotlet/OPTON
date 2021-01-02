import React from "react";

import styles from "./ArrowElement.module.css";
import ArrowImage from "../../../../assets/images/right-arrow.svg";

const arrowElement = (props) => (
  <div className={styles.ArrowElement}>
    <div className={styles.ArrowSection}>
      <img src={ArrowImage} alt="Opton" className={styles.ArrowImage} />
    </div>

    <div className={styles.TextSection}>
      <div>{props.title}</div>
      <div className={styles.TextContent}>{props.content}</div>
    </div>
  </div>
);

export default arrowElement;
