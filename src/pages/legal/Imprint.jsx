import { useEffect } from "react";
import Hero from "./Hero";
import AccordionList from "../../components/ui/AccordionList";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

import { imprintList } from "./accordionData";

const title = "imprint";
const desc = "According to § 5 TMG";

const Imprint = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Hero title={title} desc={desc} />
      <AccordionList list={imprintList} />
    </>
  );
};

export default Imprint;

/*

 */
