import React from "react";
import styles from "./FooterItems.module.css";
import FooterItem from "./FooterItem/FooterItem";
import CircleLogo from "../CircleLogo/CircleLogo";

const footerItems = (props) => (
  <div className={styles.FooterItems}>
    <FooterItem header="KONTAKT">
      Telefon kontaktowy <br />
      +48 600 668 695
      <br />
      E-mail:
      <br />
      biuro@opton.net.pl
    </FooterItem>
    <FooterItem header="ADRES">
      OPTON Piotr Sobkiewicz <br />
      ul. Ks. A. Kordeckiego 34/4,
      <br />
      Bydgoszcz 85-225
    </FooterItem>
    <FooterItem header="MENU">
<<<<<<< Updated upstream
      TEMP1 <br />
      TEMP2,
      <br />
      TEMP3
=======
      <nav>
        <ul>
          <li>Strona główna</li>
          <li>Fotowoltaika</li>
          <li>Instalacje elektryczne</li>
          <li>Instalacje alarmowe</li>
          <li>Kontakt</li>
          <li>Polityka prywatności</li>
        </ul>
      </nav>
>>>>>>> Stashed changes
    </FooterItem>
    <CircleLogo />
  </div>
);

export default footerItems;
