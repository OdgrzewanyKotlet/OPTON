import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import styles from "./Alarms.module.css";
import FirstSection from "../FirstSection/FirstSection";
import FirstSectionBg from "../../assets/images/alarms-first-section-bg.jpg";
import Infos from "./Infos/Infos";
import CounterSection from "./CounterSection/CounterSection";
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
        {/* <FirstSection
          title="Zadbaj o bezpieczeństwo swoje i swoich bliskich"
          backgroundImage={FirstSectionBg}
        /> */}
        <Infos />

        <CounterSection />

        <BasicSection customClass={styles.Secure}>
          <h3>Zabezpiecz swoją rodzinę na przyszłość</h3>
        </BasicSection>
        <BasicSection customClass={styles.Care}>
          <div className={styles.Wrapper}>
            <Fade left>
              <div className={styles.CareTitle}>
                <h2>Wiemy jak o Ciebie zadbać</h2>
                <div className={styles.UnderLine}></div>
              </div>
            </Fade>
            <Fade right cascade>
              <div className={styles.CareContent}>
                <h4>Weekend poza domem? Wyjazd na urlop?</h4>
                <p>
                  Jeśli nie masz możliwości samodzielnego zareagowania podczas
                  sabotażu zdaj się na system umożliwiający połączenie Twojego
                  domu z biurem agencji ochrony. Sprawna reakcja odpowiednich
                  służb zwiększy Twoją swobodę oraz poczucie bezpieczeństwa.
                </p>
                <h4>Zdalne sterowanie</h4>
                <p>
                  Prowadzisz zabiegany tryb życia? Chcesz mieć pewność o
                  właściwej pracy systemu? Dzięki zdalnemu trybowi kontroli nad
                  systemem będziesz w stanie sprawdzić jego stan, przejrzeć
                  zdarzenia a nawet uzbroić lub wyłączyć alarm z poziomu
                  aplikacji.
                </p>
                <h4>Ubezpieczenie</h4>
                <p>
                  Zapewniając sobie i swojej rodzinie bezpieczeństwo w postaci
                  instalacji alarmowej możesz liczyć na znaczną zniżkę nawet do
                  40% przy wykupie ubezpieczenia dla swojego domu.
                </p>
              </div>
            </Fade>
          </div>
        </BasicSection>

        <BasicSection>
          <Thieves />
        </BasicSection>
        <BasicSection customClass={styles.GainConfidence}>
          <Fade big>
            <h2>Zyskaj pewność</h2>
          </Fade>
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
