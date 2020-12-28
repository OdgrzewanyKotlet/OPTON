import React from "react";
import styles from "./Service.module.css";
import Button from "../../../UI/Button/Button";

const service = (props) => (
  <div className={styles.Service}>
    <h4>{props.title}</h4>
    <br />
    {props.children}
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button customClass={styles.Button} clicked={props.clicked}>
        Szczegóły
      </Button>
    </div>
  </div>
);

export default service;
