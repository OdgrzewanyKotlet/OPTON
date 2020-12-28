import React, { Component } from "react";
import styles from "./Services.module.css";
import Service from "./Service/Service";
import { withRouter } from "react-router-dom";

class Services extends Component {
  photovoltButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/", hash: "#top" });
  };

  electricityButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/instalacje-elektryczne" });
  };

  alarmsButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/instalacje-alarmowe" });
  };

  render() {
    return (
      <div className={styles.Services}>
        <h2>Poznaj nasze usługi</h2>
        <div className={styles.ContentBox}>
          <Service
            clicked={this.photovoltButtonClickedHandler}
            title="Fotowoltaika"
          >
            Fotowoltaika dla twojego domu i biznesu. Postaw na odnawialne źródła
            energii wykorzystując nowoczesne rozwiązania z zakresu...
          </Service>
          <Service
            clicked={this.electricityButtonClickedHandler}
            title="Instalacje elektryczne"
          >
            Dogodne, funkcjonalne i bezpieczne rozwiązania dla Twojego domu.
          </Service>
        </div>
        <div className={styles.ContentBox}>
          <Service
            clicked={this.alarmsButtonClickedHandler}
            title="Instalacje alarmowe"
          >
            W jaki sposób możesz zabezpieczyć siebie i swoją rodzinę? Postaw na
            sprawdzone rozwiązania.
          </Service>
        </div>
      </div>
    );
  }
}

export default withRouter(Services);
