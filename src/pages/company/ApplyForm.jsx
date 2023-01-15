import { useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import { jobs } from "../../data/constantData";
import { styles } from "../../Styles";

const ApplyForm = () => {
  const positions = jobs.map((job) => job.title);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="py-20 lg:pt-36 lg:pb-20">
      <Wrapper className="px-4 space-y-12">
        <header>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            Jetzt bewerben.
          </h1>
          <p className={`${styles.textPrimary} text-clrPrimary mt-8`}>
            Nutzen Sie unser Bewerbungsformular und starten Sie jetzt Ihren
            Bewerbungsprozess bei der autosecure GmbH.
          </p>
        </header>
        <form className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Offene Stelle und Standort wählen
            </h2>
            <div className={`flex gap-4 flex-col lg:flex-row lg:items-center`}>
              <div className="flex-1 space-y-4">
                <p className="text-clrPrimary font-light">
                  Bitte wählen Sie eine offene Stelle.
                </p>
                <select className="select w-full bg-white text-clrPrimary text-xl font-normal font-AllianceRegular h-14 input rounded-none focus:outline-none focus:shadow-inputShadow">
                  <option value="choose position">
                    – Offene Stellen wählen – *
                  </option>
                  {positions.map((pos) => (
                    <option value={pos} key={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-clrPrimary font-light">
                  Bitte wählen Sie einen Standort.
                </p>
                <select className="select w-full bg-white text-clrPrimary text-xl font-normal font-AllianceRegular h-14 input rounded-none focus:outline-none focus:shadow-inputShadow">
                  <option value="choose location">– Standort wählen – *</option>
                  <option value="muenster">Münster</option>
                  <option value="nationwide">Bundesweit</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Persönliche Informationen
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Vorname *"
                className="bg-white text-clrPrimary input w-full h-14 rounded-none focus:outline-none focus:shadow-inputShadow"
                name="company"
                // value={company}
                // onChange={onChange}
              />
              <input
                type="text"
                placeholder="Name *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="name"
                // value={name}
                // onChange={onChange}
              />
              <input
                type="email"
                placeholder="E-Mail Adresse *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="email"
                // value={email}
                // onChange={onChange}
              />
              <input
                type="tel"
                placeholder="Telefon-Nr. *"
                className="bg-white text-clrPrimary input h-14 w-full rounded-none focus:outline-none focus:shadow-inputShadow"
                name="phoneNo"
                // value={phoneNo}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Lebenslauf uploaden oder neu erstellen
            </h2>
            <p className="text-clrPrimary font-light">
              (max. 32MB Dateigröße).
            </p>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
              Warum möchten Sie bei autosecure arbeiten?
            </h2>
            <p className="text-clrPrimary font-light">
              Teilen Sie uns mit, warum autosecure der richtige Arbeitgeber für
              Sie ist und was Sie motiviert, Ihre Zukunft bei uns zu gestalten.
            </p>
            <textarea
              className="textarea text-lg font-AllianceRegular box-border w-full h-[200px] bg-white text-clrPrimary focus:outline-none focus:shadow-inputShadow"
              placeholder="Ihre Interessenbeschreibung"
              name="message"
              // value={message}
              // onChange={onChange}
            ></textarea>
            <label className="label items-start gap-2 sm:gap-4 cursor-pointer">
              <input type="checkbox" className="toggle" />
              <span className="text-lg text-clrPrimary">
                Ich bin damit einverstanden, dass meine Daten zur Auswertung
                innerhalb des Bewerbungsprozesses verwendet werden dürfen. Mir
                ist bewusst, dass mir ein jederzeitiges Widerrufsrecht
                ermöglicht, meine Daten jederzeit löschen zu lassen. Weitere
                Informationen zum Umgang mit Ihren persönlichen Daten finden Sie
                in unserer our{" "}
                <Link
                  to="/legal/privacy"
                  className="font-bold hover:opacity-80 text-black"
                >
                  Datenschutzerklärung
                </Link>{" "}
                .
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="btn text-white text-xl lg:text-3xl border-none bg-clrPrimary h-20 font-normal capitalize w-full mt-8 rounded-none"
          >
            Bewerbung jetzt senden
          </button>
        </form>
      </Wrapper>
    </section>
  );
};

export default ApplyForm;
