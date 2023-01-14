import { FaChevronRight } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";
import AutosecureQoute from "./ui/AutosecureQoute";

const monitering = {
  id: 1,
  title: "Überwachung in der Alarmzentrale",
  features: [
    "Für die Sicherheit Ihres Unternehmens setzen wir auf Exklusiv- Partnerschaften mit VdS-anerkannten Notruf- und Serviceleitstellen. Unsere Security-Dienstleistung erbringen wir mit starken Partnern auf Grundlage folgend aufgeführter Zertifizierungen.",
    "Eigens eingerichtete autosecure Video-Arbeitsplätze sichern individuelle Betreuung nach gemeinsam definierten Standards.",
    "Damit garantieren wir adäquate Alarmbearbeitung und Einsatzverfolgung nach höchsten Qualitätsstandards. Die Leistungsfähigkeit unserer Dienstleistung messen wir kontinuierlich.",
  ],
};

const improveRisk = {
  id: 1,
  title: "Risikosituation verbessern und Versicherungs-Prämien einsparen!",
  features: [
    "Mit Ihrem Investment in mehr Sicherheit verbessern Sie Ihre Risiko- und Versicherungssituation.",
    "Wir bieten Ihnen die Möglichkeiten Ihre betrieblichen Risiken und Versicherungen von Experten neu zu bewerten, den Versicherungsumfang zu optimieren und Versicherungsprämien einzusparen – und das kostenneutral.",
    "Zudem prüfen die Experten, ob und inwieweit sich der Versicherer an den Kosten Ihrer Investition in mehr Sicherheit beteiligt.",
  ],
};

`






`;

const privacy = {
  id: 1,
  title: "Datenschutz",
  features: [
    "Der Schutz personenbezogener Daten ist ein zentrales Merkmal professioneller Service-Leistungen.",
    "Die von den Kameras erfassten Daten werden konsequent geschützt und über gemeinsam verabschiedete Auftragsdatenverarbeitungs-Verträge datenschutzkonform verwendet.",
    "Hinweis-Beschilderung auf Ihrem Gelände sorgt für DSGVO-konforme Sichtbarkeit Ihrer Sicherheitslösung.",
    "Damit haben Sie und Ihre Kunden Rechtssicherheit.",
  ],
};

const AutosecureApplications = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4 space-y-16">
        <header>
          <h2
            className={`${styles.headingSecondary} text-clrPrimary font-normal text-center`}
          >
            Weitere Anwendungen
          </h2>
        </header>
        <div className="flex items-start justify-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            HeatMapping für optimale Artikelplatzierung und maximale Einnahmen.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            Mit der Wärmekartierung kann der Händler eine farbcodierte Karte
            erstellen, an der zu erkennen ist, wie viel Zeit die Kunden in den
            einzelnen Ladenbereichen verbringen. Damit lassen sich nicht nur gut
            und schlecht laufende Bereiche ermitteln, sondern es wird auch
            deutlich, wie viele Kunden zielstrebig nach einem konkreten Produkt
            suchen, und wie viele Kunden Produkte nebenbei in den Warenkorb
            legen.
          </p>
        </div>
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            Personenzählung – erfassen Sie die Zahlen – und das Geschäft.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            Wenn Sie wissen, wie viele Kunden über den Tag in Ihr Geschäft
            kommen, gibt es mehrere Möglichkeiten, Ihre Betriebsabläufe zu
            optimieren. Beispielsweise können Sie Ihre Personalbesetzung zu
            Stoßzeiten exakt an den Kundenbedarf anpassen, um ihren Service zu
            optimieren, und in ruhigen Zeiten mit reduzierter Belegschaft
            arbeiten, um Kosten zu sparen.
          </p>
        </div>
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start pb-20">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            Erkennung von Warteschlangen – bessere Kundenerfahrung.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            Die Warteschlangenerkennung zählt die Anzahl der Personen in der
            Warteschlange mithilfe von Kameras. Sobald ein bestimmter Grenzwert
            erreicht ist und weitere Kunden zur Kasse drängen, benachrichtigt
            das System die Geschäftsleitung, sodass weitere Kassen geöffnet
            werden können.
          </p>
        </div>
      </Wrapper>
      <AutosecureQoute qoute="Verlassen Sie umgehend das Gelände – die Polizei ist bereits alarmiert!" />
      <Wrapper className="px-4 pt-20 space-y-16">
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            {monitering.title}
          </h2>
          <div className="space-y-4 flex-1">
            {monitering.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            {improveRisk.title}
          </h2>
          <div className="space-y-4 flex-1">
            {improveRisk.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-start gap-8 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            {privacy.title}
          </h2>
          <div className="space-y-4 flex-1">
            {privacy.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureApplications;
