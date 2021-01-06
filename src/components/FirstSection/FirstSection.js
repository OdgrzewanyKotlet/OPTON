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
      <Fade cascade duration={3000}>
        <div>
          <h2 className={styles.Title}>{props.title}</h2>
          <p className={styles.Content}>{props.content}</p>
        </div>
      </Fade>
      <div className={styles.ButtonWrap}> {contactButton}</div>
    </div>
  );
};

export default FirstSection;
