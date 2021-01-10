import React, { Component } from "react";
import styles from "./CalculatorResults.module.css";
import CalculatorResult from "./CalculatorResult/CalculatorResult";

class calculatorResults extends Component {
  state = {
    installationSize: {
      icon: "Lightbulb",
      resultName: "Wielkość instalacji",
      resultValue: 20,
      unit: "kWp",
    },
    energyOutput: {
      icon: "Flash",
      resultName: "Co pozwala wyprodukować w ciągu roku",
      resultValue: 20,
      unit: "kWh",
    },
    installationCost: {
      icon: "Money",
      resultName: "Koszt brutto instalacji",
      resultValue: 20,
      unit: "zł",
    },
    costPerYear: {
      icon: "Bill",
      resultName: "Roczny rachunek za prąd bez instalacji fotowoltanicznej",
      resultValue: 20,
      unit: "zł",
    },
    costPerYearWithPhotovoltaics: {
      icon: "Wallet",
      resultName: "Roczny rachunek z instalacją fotowoltaiczną",
      resultValue: 20,
      unit: "zł",
    },
    savings: {
      icon: "Savings",
      resultName: "Oszczędności przez 25 lat",
      resultValue: 20,
      unit: "zł",
    },
  };

  static getDerivedStateFromProps(props, state) {
    const { calcProps } = props;
    if (state !== calcProps) {
      return { ...state, ...calcProps };
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.CalculatorResults}>
          <CalculatorResult
            icon={this.state.installationSize.icon}
            resultName={this.state.installationSize.resultName}
            resultValue={this.state.installationSize.resultValue}
            unit={this.state.installationSize.unit}
          />
          <CalculatorResult
            icon={this.state.energyOutput.icon}
            resultName={this.state.energyOutput.resultName}
            resultValue={this.state.energyOutput.resultValue}
            unit={this.state.energyOutput.unit}
          />
          <CalculatorResult
            icon={this.state.installationCost.icon}
            resultName={this.state.installationCost.resultName}
            resultValue={this.state.installationCost.resultValue}
            unit={this.state.installationCost.unit}
          />
        </div>
        <div className={styles.CalculatorResults}>
          <CalculatorResult
            icon={this.state.costPerYear.icon}
            resultName={this.state.costPerYear.resultName}
            resultValue={this.state.costPerYear.resultValue}
            unit={this.state.costPerYear.unit}
          />
          <CalculatorResult
            icon={this.state.costPerYearWithPhotovoltaics.icon}
            resultName={this.state.costPerYearWithPhotovoltaics.resultName}
            resultValue={this.state.costPerYearWithPhotovoltaics.resultValue}
            unit={this.state.costPerYearWithPhotovoltaics.unit}
          />
          <CalculatorResult
            icon={this.state.savings.icon}
            resultName={this.state.savings.resultName}
            resultValue={this.state.savings.resultValue}
            unit={this.state.savings.unit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default calculatorResults;
