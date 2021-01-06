import React from "react";

import Fade from "react-reveal/Fade";

import styles from "./Info.module.css";

const info = (props) => (
  <Fade big cascade delay={200}>
    <div className={styles.Info}>
      <center>
        <h2 className={styles.Title}>{props.title}</h2>
        <p className={styles.Content}>{props.content}</p>
      </center>
    </div>
  </Fade>
);

export default info;
