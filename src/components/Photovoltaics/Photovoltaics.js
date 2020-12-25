import React, { Component } from "react";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";

class Photovoltaics extends Component {
  render() {
    return (
      <FirstSection
        title="Test optona"
        content="no witam fajnie jest"
        backgroundImage="https://electrotile.com/wp-content/uploads/2019/06/statystyki-fotowoltaika.jpg"
        contactButton
      />
    );
  }
}

export default Photovoltaics;
