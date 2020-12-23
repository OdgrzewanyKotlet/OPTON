import React from "react";
import styles from "./FooterItem.module.css";

const footerItem = (props) => (
  <div className={styles.FooterItem}>
    <h3>{props.header}</h3>
    {props.children}
  </div>
);

export default footerItem;
