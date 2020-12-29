import React from "react";

import styles from "./Thieves.module.css";

const thieves = () => {
  const videoSource =
    "https://opton.net.pl//wp-content//uploads//2020//11//Untitled.mp4";
  return (
    <div className={styles.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={styles.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {
        <div className={styles.Content}>
          <div className={styles.SubContent}>
            <h2>Nie tylko złodzieje</h2>
            <p>
              Niewyjaśnione sytuacje stają się jasne. Monitoring powinien być
              integralną częścią każdego systemu alarmowego. Mając na uwadze to
              i zebrane doświadczenie, możemy zaoferować Ci najlepsze
              rozwiązania.
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default thieves;
