import React from "react";

import styles from "./Infos.module.css";
import Info from "./Info/Info";

const infos = (props) => (
  <React.Fragment>
    <Info
      title="Czym jest instalacja alarmowa?"
      content="Instalacją alarmową określa się systemy sygnalizujące włamanie, zagrożenie lub inne niebezpieczeństwa spotykane w domu. W tym celu wykorzystuje się zaawansowane czujniki oraz urządzenia połączone z&nbsp;centralnym systemem zarządzającym. Alarm stanowi drugi najważniejszy element ochrony majątku po zabezpieczeniu mechanicznym."
    />
    <hr className={styles.Line} />
    <Info
      title="Co wyróżnia nowoczesną instalację alarmową?"
      content="Ludzki węch, słuch oraz wzrok nie są nieomylne. Dzięki zastosowaniu nowoczesnych rozwiązań technologicznych, jesteśmy w&nbsp;stanie wykryć zagrożenie znacznie szybciej, a&nbsp;o&nbsp;ich wystąpieniu natychmiast zostaniesz poinformowany powiadomieniem SMS lub połączeniem telefonicznym."
    />
    <hr className={styles.Line} />
    <Info
      title="Atutów jest wiele..."
      content="Nasze systemy alarmowe projektowane są w&nbsp;taki sposób by stale mogły być rozwijane poprzez dodawanie kolejnych komponentów. Instalacja może stać się integralną częścią Twojego inteligentnego domu."
    />
  </React.Fragment>
);

export default infos;
