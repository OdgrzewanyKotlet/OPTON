import React, { Component } from "react";

import styles from "./Electricity.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/electricity-first-section-bg.jpg";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";

class Electricity extends Component {
  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
          title="Test elektryki"
          content="Elektryka prąd nie tyka hehe"
          backgroundImage="https://motionarray.imgix.net/preview-76364-GUT2KEdyAx_0006.jpg"
        />
        <BasicSection customClass={styles.Smart}>
          <h2>Przygotuj się na Smart Home</h2>
          Od tego się zaczyna! Już na etapie projektowania instalacji
          elektrycznej pomyśl o smart rozwiązaniach. Dzięki rozbudowanej i
          przemyślanej instalacji elektrycznej w łatwy sposób zaadaptujesz do
          swojego domu inteligentne rozwiązania.
        </BasicSection>
        <BasicSection customClass={styles.Aesthetics}>
          <h2>Estetyka pracy i wykonania</h2>
          Wykonując dany projekt dbamy nie tylko o jego trwałość i
          funkcjonalność ale również o estetykę. Ma ona ogromny wpływ zwłaszcza
          w przypadku domów i mieszkań. Porządek i przygotowanie wszystkiego
          według powszechnych norm pozwala ułatwić wszelkie prace związane z
          elektryką.
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

export default Electricity;
