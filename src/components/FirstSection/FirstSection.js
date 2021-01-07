import React from "react";
import { useHistory } from "react-router-dom";

import Fade from "react-reveal/Fade";

import styles from "./FirstSection.module.css";

const FirstSection = (props) => {
  const history = useHistory();

  const contactButtonHandler = () => {
    history.push("/kontakt");
  };

  let contactButton = null;

  if (props.contactButton) {
    contactButton = (
      <Fade>
        <button onClick={contactButtonHandler} className={styles.Button}>
          Napisz do nas
        </button>
      </Fade>
    );
  }

  const backgroundImage = props.backgroundImage;

  return (
    <div
      className={styles.FirstSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        {" "}
        <Fade duration={3000}>
          <h2 className={styles.Title}>{props.title}</h2>{" "}
        </Fade>
        <Fade duration={3000} delay={500}>
          <p className={styles.Content}>{props.content}</p>{" "}
        </Fade>
      </div>
      <Fade duration={3000} delay={1000}>
        <div className={styles.ButtonWrap}> {contactButton}</div>{" "}
      </Fade>
    </div>
  );
};

export default FirstSection;
