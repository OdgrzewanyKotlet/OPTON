import React from "react";

import styles from "./Info.module.css";

const info = (props) => (
  <div className={styles.Info}>
    <center>
      <h2 className={styles.Title}>{props.title}</h2>
      <p className={styles.Content}>{props.content}</p>
    </center>
  </div>
);

export default info;
