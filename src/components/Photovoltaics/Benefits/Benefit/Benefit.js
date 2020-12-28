import React from "react";

import styles from "./Benefit.module.css";

const benefit = (props) => (
  <div className={styles.Benefit}>
    <img src={props.image} alt="Opton" className={styles.Image} />
    <h2 className={styles.Title}>{props.title}</h2>
    <p className={styles.Content}>{props.content}</p>
  </div>
);

export default benefit;
