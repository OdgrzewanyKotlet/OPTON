import React from "react";

import styles from "./Electricity.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/electricity-first-section-bg.jpg";

const Electricity = () => (
  <FirstSection
    title="Nowoczesna instalacja elektryczna"
    content="Prawidłowo zrealizowana instalacja elektryczna to nie tylko bezawaryjne działanie przez długi okres czasu, ale również oszczędność i bezpieczeństwo."
    backgroundImage={FirstSectionBg}
  />
);

export default Electricity;
