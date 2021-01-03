import React from "react";

import Fade from "react-reveal/Fade";

import styles from "./ExperienceFeature.module.css";

const experienceFeature = (props) => (
  <Fade top cascade>
    <div className={styles.ExperienceFeature}>
      <h2 className={styles.Title}>{props.title}</h2>
      <p className={styles.Content}>{props.content}</p>
    </div>
  </Fade>
);

export default experienceFeature;
