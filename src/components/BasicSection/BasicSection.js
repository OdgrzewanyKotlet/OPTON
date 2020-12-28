import React from "react";
import styles from "./BasicSection.module.css";

const basicSection = (props) => {
  var sectionStyle = {
    height: props.sectionHeight,
    backgroundImage: "url(" + props.bgImg + ")",
  };

  return (
    <div style={sectionStyle} className={styles.BasicSection}>
      {props.children}
    </div>
  );
};

export default basicSection;
