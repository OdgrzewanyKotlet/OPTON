import React from "react";

import styles from "./ExperienceFeature.module.css";

const experienceFeature = (props) => (
  <div className={styles.ExperienceFeature}>
    <h2 className={styles.Title}>{props.title}</h2>
    <p className={styles.Content}>{props.content}</p>
  </div>
);

export default experienceFeature;
