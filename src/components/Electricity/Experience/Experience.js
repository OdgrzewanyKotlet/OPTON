import React from "react";

import Zoom from "react-reveal/Zoom";

import styles from "./Experience.module.css";
import ExperienceFeature from "./ExperienceFeature/ExperienceFeature";

const experience = (props) => (
  <div className={styles.Experience}>
    <center>
      <Zoom cascade>
        <h2 className={styles.Title}>Nasze doświadczenie w Twoim domu</h2>
        <p className={styles.Content}>
          Zebrane na przestrzeni wielu lat doświadczenie pozwala zapewnić
          naszych klientów o satysfakcji z ciągłości i funkcjonalności działania
          naszych instalacji.
        </p>
      </Zoom>
      <ExperienceFeature
        title="LEGALNOŚĆ"
        content="Jesteśmy zarejestrowaną i w pełni legalnie działającą firmą. Nasze usługi oferujemy na terenie całej Polski."
      />
      <ExperienceFeature
        title="UPRAWNIENIA"
        content="Nasze doświadczenie potwierdza nie tylko liczba zadowolonych klientów, ale również posiadane przez naszych fachowców kwalifikacje."
      />
      <ExperienceFeature
        title="RZETELNOŚĆ"
        content="Każde przyjęte zlecenie traktujemy z należytą uwagą, poświęcając czas na dobór najlepszych rozwiązań i stały kontakt z klientem. Gwarantujemy terminość wykonania prac."
      />
    </center>
  </div>
);

export default experience;
