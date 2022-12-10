import { FaChevronRight } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";
import Hero from "./Hero";
/*



 */

const list = [
  "imprint",
  "Notice in accordance with the Online Dispute Settlement Ordinance",
  "Note according to the Consumer Dispute Settlement Act (VSBG)",
  "Disclaimer - legal information",
];
const title = "imprint";
const desc = "According to § 5 TMG";

const Imprint = () => {
  return <Hero title={title} desc={desc} list={list} />;
};

export default Imprint;
