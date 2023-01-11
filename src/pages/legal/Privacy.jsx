import { useEffect } from "react";
import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import { privacyList } from "./accordionData";
import { useTitle } from "../../hooks/customHooks";

const title = "privacy";

const Privacy = () => {
  useTitle("Legal | Privacy – autosecure |  Safe.  Scan.  locate.");
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
