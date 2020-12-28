import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.FAQAcc}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={styles.Heading}>
            JAKI JEST CAŁKOWITY KOSZT INSTALACJI?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Koszt instalacji zależy od jej mocy zainstalowanej oraz
            zastosowanych materiałów (paneli i inwertera) Im większa instalacja
            tym cena jednostkowa instalacji maleje. W celu uzyskania wyceny
            zapraszamy do kontaktu z naszą Firmą. Zapewniamy bezpłatny audyt,
            który określi, jaka moc przyłączeniowa będzie potrzebna.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={styles.Heading}>
            ILE CZASU TRWA WYKONANIE INSTALACJI?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Zależnie od wielkości i stopnia skomplikowania instalacji. Średni
            czas montażu dla instalacji do 5 KW to 2-3 dni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={styles.Heading}>
            JAK DŁUGĄ MAJĄ GWARANCJĘ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Producent wykorzystywanych przez nas paneli CanadianSolar obejmuje
            gwarancją spadek mocy do 25 lat. Gwarancja udzielana na instalację
            przez naszą firmę obejmuje okres do 5 lat z możliwością jej
            przedłużenia. W przypadku falowników w zależności od producenta
            gwarancja zwykle wynosi od 7-10 lat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={styles.Heading}>
            JAK DŁUGO DZIAŁAJĄ PANELE?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Przed wprowadzeniem modułów na rynek panele zostają poddane testom i
            kontrolom stąd ich awaryjność jest bardzo niska. W pierwszym roku
            użytkowania producenci deklarują spadek mocy do wartości nie
            mniejszej niż 98% mocy wyjściowej. Od 2 roku do 25 lat deklarowana
            wartość spadku mocy wynosi 0,55% w skali roku. Pod koniec 25 lat
            działania rzeczywista moc wyjściowa nie spadnie poniżej 84,8%.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={styles.Heading}>
            CZY INSTALACJA FOTOWOLTAICZNA DZIAŁA W OKRESIE ZIMOWYM?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jeżeli na panele padają promienie słoneczne i nie zalega na nich
            śnieg to moduły będą wytwarzały energię elektryczną. Instalacja ma
            obniżoną wydajność wyłącznie ze względu na krótszy okres czasu
            pomiędzy wschodem a zachodem słońca oraz mniej intensywne światło
            słoneczne. Na korzyść właścicieli instalacji wpływa fakt, że
            sprawność modułów wzrasta wraz z obniżaniem się ich temperatury, co
            oznacza że najlepszymi warunkami do produkcji energii są słoneczne i
            chłodne dni, czyli dokładnie takie, które panują zimą.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={styles.Heading}>
            CZY WYMIANA LICZNIKA NA DWUKIERUNKOWY JEST PŁATNA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nie, operator wykonuje wymianę licznika energii na dwukierunkowy
            oraz instaluje zabezpieczenia na sieci. Za obie czynności nie
            pobiera opłat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
