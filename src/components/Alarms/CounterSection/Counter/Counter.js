import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Counter.module.css";
import CountUp from "react-countup";

const counter = (props) => (
  <div className={styles.Counter}>
    <div className={styles.CountUp}>
      <CountUp end={props.end} suffix="%" duration={4}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
    <h2 className={styles.Title}>{props.title}</h2>
    <p className={styles.Content}>{props.content}</p>
  </div>
);
export default counter;
