import Comp1 from "../../../assets/images/comp1.png";
import Comp2 from "../../../assets/images/comp2.png";
import Comp3 from "../../../assets/images/comp3.png";
import Comp4 from "../../../assets/images/comp4.png";
import React from "react";
import styles from "./CompaniesCarousel.module.css";

const companiesCarousel = (props) => (
  <div className={styles.CompaniesCarousel}>
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <img src={Comp1} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp2} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp3} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp4} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp1} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp2} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp3} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp4} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp1} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp2} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp3} width="300" height="auto" alt="" />
        </div>
        <div className={styles.slide}>
          <img src={Comp4} width="300" height="auto" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default companiesCarousel;
