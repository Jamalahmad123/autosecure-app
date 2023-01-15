import { useEffect } from "react";
import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import { conditionsList, conditionList2 } from "./accordionData";
import Wrapper from "../../components/ui/Wrapper";
import { useTitle } from "../../hooks/customHooks";

const header1 = {
  id: 1,
  desc: "Allgemeine Geschäftsbedingungen (AGB) Elektrohandwerk der autosecure GmbH",
  date: "vom 04.08.2020",
};

const header2 = {
  id: 1,
  desc: "Allgemeine Geschäftsbedingungen (AGB) für das deutsche Wach- und Sicherheitsgewerbe (BDSW)",
  date: "Gültig ab 01.01.2011",
};

const Conditions = () => {
  return (
    <>
      <ConditonsTitle heroContent={header1} />
      <AccordionList list={conditionsList} />
      <ConditonsTitle heroContent={header2} />
      <AccordionList list={conditionList2} />
    </>
  );
};

const ConditonsTitle = ({ heroContent }) => {
  useTitle("Legal | Considions – autosecure |  Safe.  Scan.  locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <header className="py-16">
      <Wrapper className="px-4">
        <h1 className="text-5xl font-bold font-AllianceBold lg:text-8xl text-clrPrimary mb-3">
          AGB
        </h1>
        <div className="max-w-xl">
          <p className="text-lg md:text-xl font-medium text-clrPrimary">
            {heroContent.desc}
          </p>
          <span className="text-light text-sm">{heroContent.date}</span>
        </div>
      </Wrapper>
    </header>
  );
};

export default Conditions;
