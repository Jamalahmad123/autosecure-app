import { useEffect } from "react";
import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import { privacyList } from "./accordionData";

const title = "privacy";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Hero title={title} />
      <AccordionList list={privacyList} />
    </>
  );
};

export default Privacy;
