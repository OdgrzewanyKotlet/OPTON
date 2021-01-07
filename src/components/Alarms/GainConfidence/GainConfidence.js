import React from "react";

import Fade from "react-reveal/Fade";

import styles from "./GainConfidence.module.css";
import HandsImg from "../../../assets/images/alarms-hands.png";

const gainConfidence = (props) => (
  <div className={styles.GainConfidence}>
    <div className={styles.Wrapper}>
      <Fade left>
        <div className={styles.ImageSection}>
          <img src={HandsImg} alt="Opton" />
        </div>
      </Fade>
      <Fade right cascade>
        <div className={styles.ListSection}>
          <h4>OBRAZ Z MONITORINGU</h4>
          <p>
            Najważniejszą cechą monitoringu jest dostarczanie informacji. Gdy
            dojdzie do jakiegoś zdarzenia – napaści, bójki, uszkodzenia mienia,
            kradzieży i&nbsp;innych – obraz z&nbsp;monitoringu daje podstawy do
            wskazania osób odpowiedzialnych i&nbsp;udowodnienia im winy na
            drodze sądowej.
          </p>
          <h4>O KAŻDEJ PORZE DNIA</h4>
          <p>
            Najważniejszą cechą monitoringu jest dostarczanie informacji. Gdy
            dojdzie do jakiegoś zdarzenia – napaści, bójki, uszkodzenia mienia,
            kradzieży i&nbsp;innych – obraz z&nbsp;monitoringu daje podstawy do
            wskazania osób odpowiedzialnych i&nbsp;udowodnienia im winy na
            drodze sądowej.
          </p>
          <h4>KONTROLA W ZASIĘGU RĘKI</h4>
          <p>
            Najważniejszą cechą monitoringu jest dostarczanie informacji. Gdy
            dojdzie do jakiegoś zdarzenia – napaści, bójki, uszkodzenia mienia,
            kradzieży i&nbsp;innych – obraz z monitoringu daje podstawy do
            wskazania osób odpowiedzialnych i&nbsp;udowodnienia im winy na
            drodze sądowej.
          </p>
        </div>
      </Fade>
    </div>
  </div>
);

export default gainConfidence;
