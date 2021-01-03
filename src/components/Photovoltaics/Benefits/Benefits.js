import React from "react";

import Zoom from "react-reveal/Zoom";

import styles from "./Benefits.module.css";
import Benefit from "./Benefit/Benefit";
import HappyImage from "../../../assets/images/happy.svg";

const benefits = (props) => (
  <Zoom cascade>
    <div className={styles.Benefits}>
      <h2 className={styles.Title}>Płynące korzyści</h2>
      <Benefit
        image={HappyImage}
        title="Oszczędność"
        content="Oszczędność - słowo kluczowe podczas wyboru instalacji fotowoltaicznej. Średni czas zwrotu inwestycji to około 8 lat dla osób prywatnych i 6-8 lat dla przedsiębiorstw."
      />
      <Benefit
        image={HappyImage}
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
