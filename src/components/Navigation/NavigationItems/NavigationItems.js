import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" exact>
      FOTOWOLTAIKA
    </NavigationItem>
    <NavigationItem link="/instalacje-elektryczne">
      INSTALACJE ELEKTRYCZNE
    </NavigationItem>
    <NavigationItem link="/instalacje-alarmowe">
      INSTALACJE ALARMOWE
    </NavigationItem>
    <NavigationItem link="/kontakt">KONTAKT</NavigationItem>
  </ul>
);

export default navigationItems;
