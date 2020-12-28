import React from "react";
import styles from "./Footer.module.css";
import FooterItems from "./FooterItems/FooterItems";

const footer = (props) => (
  <div className={styles.Footer}>
    <FooterItems></FooterItems>
  </div>
);

export default footer;
