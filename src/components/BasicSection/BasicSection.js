import React from "react";
import styles from "./BasicSection.module.css";

const basicSection = (props) => {
  return (
    <div className={styles.BasicSection + " " + props.customClass}>
      {props.children}
    </div>
  );
};

export default basicSection;
