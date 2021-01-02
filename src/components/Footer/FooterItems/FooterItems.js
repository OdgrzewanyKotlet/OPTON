import React from "react";
import styles from "./FooterItems.module.css";
import FooterItem from "./FooterItem/FooterItem";
import CircleLogo from "../CircleLogo/CircleLogo";
import { NavLink } from "react-router-dom";

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
      <nav>
        <ul>
          <li>
            <NavLink to="/">Strona główna</NavLink>
          </li>
          <li>
            <NavLink to="/">Fotowoltaika</NavLink>
          </li>
          <li>
            <NavLink to="/instalacje-elektryczne">
              Instalacje elektryczne
            </NavLink>
          </li>
          <li>
            <NavLink to="/instalacje-alarmowe">Instalacje alarmowe</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/polityka-prywatnosci">Polityka prywatności</NavLink>
          </li>
        </ul>
      </nav>
    </FooterItem>
    <CircleLogo />
  </div>
);

export default footerItems;
