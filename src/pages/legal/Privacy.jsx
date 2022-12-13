import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import { privacyList } from "./accordionData";

const title = "privacy";

const Privacy = () => {
  return (
    <>
      <Hero title={title} />
      <AccordionList list={privacyList} />
    </>
  );
};

export default Privacy;
