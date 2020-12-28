import React, { Component } from "react";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";

class Photovoltaics extends Component {
  buttonClickedHandler = () => {
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
          <h2>Dołącz do grona naszych klientów!</h2>
          <Button clicked={this.buttonClickedHandler}>
            SKONTAKTUJ SIĘ Z NAMI
          </Button>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Photovoltaics;
