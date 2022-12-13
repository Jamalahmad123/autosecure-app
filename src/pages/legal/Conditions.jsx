import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import { conditionsList, conditionList2 } from "./accordionData";
import Wrapper from "../../components/ui/Wrapper";

const header1 = {
  id: 1,
  desc: "General terms and conditions (GTC) electrical trade of autosecure GmbH",
  date: "from 04.08.2020",
};

const header2 = {
  id: 1,
  desc: "General Terms and Conditions (GTC) for the German guard and security trade (BDSW)",
  date: "Valid from 01.01.2011",
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
  return (
    <header className="py-16">
      <Wrapper className="px-4">
        <h1 className="text-5xl font-bold font-AllianceBold lg:text-8xl text-clrPrimary mb-3">
          Conditions
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
