import React from "react";

import Zoom from "react-reveal/Zoom";

import styles from "./Benefit.module.css";

const benefit = (props) => (
  <Zoom>
    <div className={styles.Benefit}>
      <img src={props.image} alt="Opton" className={styles.Image} />
      <h2 className={styles.Title}>{props.title}</h2>
      <p className={styles.Content}>{props.content}</p>
    </div>
  </Zoom>
);

export default benefit;
