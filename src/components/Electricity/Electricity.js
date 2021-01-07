import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import styles from "./Electricity.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/electricity-first-section-bg.jpg";
import Experience from "./Experience/Experience";
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
          title="Nowoczesna
       instalacja elektryczna"
          content="Prawidłowo zrealizowana instalacja elektryczna to nie tylko bezawaryjne działanie przez długi okres czasu, ale również oszczędność i bezpieczeństwo."
          backgroundImage={FirstSectionBg}
        />
        <Experience />
        <BasicSection customClass={styles.Smart}>
          <Fade left>
            <h2>Przygotuj się na Smart Home</h2>
            Od tego się zaczyna! Już na etapie projektowania instalacji
            elektrycznej pomyśl o&nbsp;smart rozwiązaniach. Dzięki rozbudowanej
            i&nbsp;przemyślanej instalacji elektrycznej w&nbsp;łatwy sposób
            zaadaptujesz do swojego domu inteligentne rozwiązania.
          </Fade>
        </BasicSection>
        <BasicSection customClass={styles.Aesthetics}>
          <Fade big>
            <h2>Estetyka pracy i&nbsp;wykonania</h2>{" "}
          </Fade>
          <Fade delay={500}>
            Wykonując dany projekt dbamy nie tylko o jego trwałość
            i&nbsp;funkcjonalność ale również o&nbsp;estetykę. Ma ona ogromny
            wpływ zwłaszcza w przypadku domów i&nbsp;mieszkań. Porządek
            i&nbsp;przygotowanie wszystkiego według powszechnych norm pozwala
            ułatwić wszelkie prace związane z&nbsp;elektryką.
          </Fade>
        </BasicSection>
        <BasicSection customClass={styles.Contact}>
          <h2>Skontaktuj się z nami</h2>
          <div style={{ paddingBottom: "20px" }}>
            Pomożemy ci podjąć właściwe decyzje
          </div>
          <Button clicked={this.contactButtonClickedHandler}>
            Napisz do nas
          </Button>
          <div style={{ paddingBottom: "20px" }}></div>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Electricity;
