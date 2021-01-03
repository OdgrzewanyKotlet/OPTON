import React from "react";
import { useHistory } from "react-router-dom";

import Zoom from "react-reveal/Zoom";

import styles from "./FirstSection.module.css";

const FirstSection = (props) => {
  const history = useHistory();

  const contactButtonHandler = () => {
    history.push("/kontakt");
  };

  let contactButton = null;

  if (props.contactButton) {
    contactButton = (
      <Zoom cascade>
        <button onClick={contactButtonHandler} className={styles.Button}>
          Napisz do nas
        </button>
      </Zoom>
    );
  }

  const backgroundImage = props.backgroundImage;

  return (
    <div
      className={styles.FirstSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Zoom cascade>
        <div>
          <h2 className={styles.Title}>{props.title}</h2>
          <p className={styles.Content}>{props.content}</p>
        </div>
      </Zoom>
      {contactButton}
    </div>
  );
};

export default FirstSection;
