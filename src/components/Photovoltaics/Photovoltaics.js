import React, { Component } from "react";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";
import Services from "./Services/Services";

class Photovoltaics extends Component {
  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
          title="Test optona"
          content="no witam fajnie jest"
          backgroundImage="https://electrotile.com/wp-content/uploads/2019/06/statystyki-fotowoltaika.jpg"
          contactButton
        />
        <BasicSection>
          <Services />
        </BasicSection>
        <BasicSection customClass={styles.Contact}>
          <h2>Dołącz do grona naszych klientów!</h2>
          <Button clicked={this.contactButtonClickedHandler}>
            SKONTAKTUJ SIĘ Z NAMI
          </Button>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Photovoltaics;
