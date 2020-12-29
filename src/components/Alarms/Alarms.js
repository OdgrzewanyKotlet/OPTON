import React from "react";

import styles from "./Alarms.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/alarms-first-section-bg.jpg";
import Infos from "./Infos/Infos";

const Alarms = () => (
  <React.Fragment>
    <FirstSection
      title="Zadbaj o bezpieczeństwo swoje i swoich bliskich"
      backgroundImage={FirstSectionBg}
    />
    <Infos />
  </React.Fragment>
);

export default Alarms;
