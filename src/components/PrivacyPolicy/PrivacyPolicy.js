import React from "react";

import styles from "./PrivacyPolicy.module.css";

const privacyPolicy = (props) => (
  <div className={styles.PrivacyPolicy}>
    <h2>Polityka prywatności</h2>
    <p>
      Szanowni Państwo, informujemy, że Państwa dane osobowe podane w formularzu
      kontaktowym lub w emailu przetwarzane są przez “OPTON” Piotr Sobkiewicz z
      siedzibą w Bydgoszczy przy ul. Ks. A. Kordeckiego 34/4, który to jest
      administratorem danych. Dane te przetwarzane są w celu odpowiedzi na
      przesłane przez Państwa pytania, udzielenia informacji lub ustosunkowania
      się do Państwa wniosków i sugestii. Podstawą przetwarzania danych jest
      realizacja prawnie uzasadnionych interesów w postaci utrzymania
      komunikacji z użytkownikiem formularza lub emaila.
    </p>
    <p>
      Państwa dane będą przechowywane przez okres jednego roku. Podanie przez
      Państwa danych jest dobrowolne, ale konieczne gdyż bez Państwa danych nie
      będziemy mogli udzielić odpowiedzi. Mają Państwo prawo dostępu do swoich
      danych osobowych, ich sprostowania, usunięcia lub ograniczenia
      przetwarzania, a także prawo wniesienia sprzeciwu wobec przetwarzania, a
      także prawo do przenoszenia swoich danych oraz wniesienia skargi do
      Prezesa Urzędu Ochrony Danych Osobowych.
    </p>
  </div>
);

export default privacyPolicy;
