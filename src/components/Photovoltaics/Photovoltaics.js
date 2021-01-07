import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";
import Benefits from "./Benefits/Benefits";
import Services from "./Services/Services";
import FAQ from "./FAQ/FAQ";
import Managment from "./Managment/Managment";
import CompaniesCarousel from "./CompaniesCarousel/CompaniesCarousel";
import MeaConsulting from "./MeaConsulting/MeaConsulting";
import Calculator from "./Calculator/Calculator";

class Photovoltaics extends Component {
  state = {
    sliderValue: null,
  };

  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  getSliderValue = (e, value) => {
    this.setState({ sliderValue: value });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
          title="Fotowoltaika dla Twojego domu i&nbsp;biznesu"
          content="Postaw na odnawialne źródła energii wykorzystując nowoczesne rozwiązania z zakresu technologii fotowoltaicznych i obniż swój rachunek za prąd."
          backgroundImage="https://opton.net.pl/wp-content/uploads/2020/09/pexels-pixabay-356036-scaled.jpg"
          contactButton
        />
        <BasicSection>
          <div className={styles.Wrapper}>
            <Fade left>
              <div className={styles.FirstStepTitle}>
                <h2>
                  Zrób pierwszy krok, <br /> my zrobimy drugi
                </h2>
              </div>
            </Fade>
            <Fade right>
              <div className={styles.FirstStepContent}>
                <p>
                  Zacznijmy od zebrania rachunków za energię elektryczną
                  z&nbsp;okresu jednego roku. Dogłębna analiza pozwoli nam na
                  precyzyjne określenie zużycia energii elektrycznej
                  w&nbsp;Twoim gospodarstwie. Na tej podstawie określimy
                  wielkość instalacji fotowoltaicznej.
                </p>
                <p>
                  Bardzo ważną kwestią jest wybór miejsca montażu instalacji
                  fotowoltaicznej. Podczas spotkania określamy dostępność
                  powierzchni montażowej oraz wyznaczymy orientację – najlepsze
                  uzyski będą z instalacji skierowanych na stronę południową.
                  Powierzchnia zajmowana przez domowe instalacje fotowoltaiczne
                  zależy oczywiście od mocy takiej instalacji, czyli ilości
                  zamontowanych modułów. Odchylenia na stronę wschodnią lub
                  zachodnią nie wykluczają montażu instalacji.
                </p>
                <p>
                  Informacje, które zgromadzimy podczas przechodzenia przez
                  poszczególne kroki, pozwolą nam opracować ofertę. Po
                  pozytywnej decyzji klienta umawiamy dogodny termin
                  i&nbsp;realizujemy zlecenie.
                </p>
              </div>
            </Fade>
          </div>
        </BasicSection>
        <Benefits />
        <BasicSection customClass={styles.Calculator}>
          <h2>Kalkulacja oszczędności</h2>
          <Calculator getValue={this.getSliderValue} />
          TEST| {this.state.sliderValue} |TEST
        </BasicSection>
        <Managment />
        <MeaConsulting />
        <BasicSection>
          <h2>Finansowanie</h2>
          <div className={styles.FinanceText}>
            Zyskaj czas i&nbsp;pieniądze dzięki naszej ścisłej współpracy
            z&nbsp;niezależną grupą specjalistów MEAConsulting. Dla pełnej
            satysfakcji klienta usługi związane z&nbsp;dofinansowaniami,
            kredytami i&nbsp;leasingami powierzamy profesjonalistom, którzy na
            bieżąco śledzą i&nbsp;analizują formy finansowania naszych
            instalacji. Dzięki takiej formie kooperacji jesteśmy w&nbsp;stanie
            działać szybciej i&nbsp;efektywniej, co przekłada się na zadowolenie
            wśród odbiorców.
          </div>
          <CompaniesCarousel />
        </BasicSection>
        <BasicSection customClass={styles.FAQ}>
          <h2>FAQ</h2>
          Najczęściej zadawane pytania
          <FAQ />
        </BasicSection>
        <BasicSection>
          <Services />
        </BasicSection>
        <BasicSection customClass={styles.Contact}>
          <h2>Dołącz do grona naszych klientów!</h2>
          <Button clicked={this.contactButtonClickedHandler}>
            SKONTAKTUJ SIĘ Z NAMI
          </Button>
          <div style={{ paddingBottom: "20px" }}></div>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Photovoltaics;
