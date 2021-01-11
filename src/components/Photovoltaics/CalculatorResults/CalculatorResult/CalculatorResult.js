import React, { Component } from "react";
import styles from "./CalculatorResult.module.css";

import LightbulbIcon from "@material-ui/icons/EmojiObjectsRounded";
import FlashIcon from "@material-ui/icons/FlashOnSharp";
import MoneyIcon from "@material-ui/icons/AccountBalanceRounded";
import BillIcon from "@material-ui/icons/ReceiptRounded";
import WalletIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import SavingsIcon from "@material-ui/icons/CallMadeRounded";

class CalculatorResult extends Component {
  render() {
    let icon = null;
    switch (this.props.icon) {
      case "Lightbulb":
        icon = <LightbulbIcon fontSize="inherit" />;
        break;
      case "Flash":
        icon = <FlashIcon fontSize="inherit" />;
        break;
      case "Money":
        icon = <MoneyIcon fontSize="inherit" />;
        break;
      case "Bill":
        icon = <BillIcon fontSize="inherit" />;
        break;
      case "Wallet":
        icon = <WalletIcon fontSize="inherit" />;
        break;
      case "Savings":
        icon = <SavingsIcon fontSize="inherit" />;
        break;
      default:
        break;
    }

    return (
      <div className={styles.CalculatorResult}>
        <div className={styles.ImageBox}>{icon}</div>
        <div className={styles.TextResults}>
          <h5>{this.props.resultName}</h5>
          <p>
            {this.props.resultValue} {this.props.unit}
          </p>
        </div>
      </div>
    );
  }
}

export default CalculatorResult;
