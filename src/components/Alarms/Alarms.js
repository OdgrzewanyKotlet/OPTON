import React, { Component } from "react";

import styles from "./Alarms.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/alarms-first-section-bg.jpg";
import Infos from "./Infos/Infos";

import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";
import Thieves from "./Thieves/Thieves";
import GainConfidence from "./GainConfidence/GainConfidence";

class Alarms extends Component {
  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
      title="Zadbaj o bezpieczeństwo swoje i swoich bliskich"
      backgroundImage={FirstSectionBg}
    />
    <Infos />
        <BasicSection>
          <Thieves />
        </BasicSection>
        <BasicSection customClass={styles.GainConfidence}>
          <h2>Zyskaj pewność</h2>
          <GainConfidence />
        </BasicSection>

        <BasicSection customClass={styles.Contact}>
          <h2>Skontaktuj się z nami</h2>
          <div style={{ paddingBottom: "20px" }}>
            Pomożemy ci podjąć właściwe decyzje
          </div>
          <Button clicked={this.contactButtonClickedHandler}>
            Napisz do nas
          </Button>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Alarms;
