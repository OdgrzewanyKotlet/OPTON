import React from "react";

import Zoom from "react-reveal/Zoom";

import styles from "./Benefits.module.css";
import Benefit from "./Benefit/Benefit";
import HappyImage from "../../../assets/images/happy.svg";
import MoneyImage from "../../../assets/images/money.svg";
import LeafImage from "../../../assets/images/leaf.svg";

const benefits = (props) => (
  <Zoom cascade>
    <div className={styles.Benefits}>
      <h2 className={styles.Title}>Płynące korzyści</h2>
      <Benefit
        image={MoneyImage}
        title="Oszczędność"
        content="Oszczędność - słowo kluczowe podczas wyboru instalacji fotowoltaicznej. Średni czas zwrotu inwestycji to około 8 lat dla osób prywatnych i 6-8 lat dla przedsiębiorstw."
      />
      <Benefit
        image={LeafImage}
        title="Ekologia"
        content="Fotowoltaika to nie tylko korzyść dla Twojego portfela, ale przede wszystkim dla środowiska. Skorzystaj z dóbr odnawialnych źródeł energii i Ty!"
      />
      <Benefit
        image={HappyImage}
        title="Komfort i wygoda"
        content="Zaufaj bezobsługowemu systemowi produkcji prądu. Instalacja bez potrzeby przebudowy domu i pozwoleń budowlanych."
      />
    </div>
  </Zoom>
);

export default benefits;
