import React from "react";

import styles from "./CounterSection.module.css";
import Counter from "./Counter/Counter";

const counterSection = (props) => (
  <div className={styles.CounterSection}>
    <h2 className={styles.Title}>Nie zdawaj się na sąsiada</h2>
    <Counter
      end={67}
      title="BEZ ZABEZPIECZENIA"
      content="Aż tyle domostw w&nbsp;Polsce wciąż nie posiada żadnych zabezpieczeń. Razem możemy zmienić te statystyki."
    />
    <Counter
      end={70}
      title="ODSTRASZONYCH WŁAMYWACZY"
      content="Jak wskazują policyjne dane, zastosowanie nawet najprostszego systemu alarmowego pozwala skutecznie zniechęcić włamywaczy."
    />
  </div>
);

export default counterSection;
