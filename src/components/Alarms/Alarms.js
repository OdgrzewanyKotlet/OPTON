import React, { Component } from "react";

import styles from "./Alarms.module.css";
import FirstSection from "../FirstSection/FirstSection";
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
          title="Test alarmów"
          content="Ijo ijo włamanie"
          backgroundImage="https://as1.ftcdn.net/jpg/01/99/21/96/1000_F_199219689_3X1SIeG3HuZcwbdE4B5Fthx33QCmTxqN.jpg"
        />
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
