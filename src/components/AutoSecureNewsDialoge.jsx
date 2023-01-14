import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../Styles";
import TypeWriter from "./ui/TypeWriter";
import Wrapper from "./ui/Wrapper";

const AutoSecureNewsDialoge = () => {
  const labels = ["Neues von autosecure"];

  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4">
        <TypeWriter width={140} labels={labels} />
        <h2 className={`${styles.headingSecondary} text-clrPrimary mb-8`}>
          Aktuelles über unsere Projekte
          <br className="hidden lg:block" /> und unser Unternehmen.
        </h2>
        <Link
          to="/company/news"
          className="text-xl border-b p-4 border-clrPrimary text-clrPrimary hover:bg-white"
        >
          Alle News anzeigen
          <FaChevronRight className="inline-block text-clrPrimary ml-2" />
        </Link>
      </Wrapper>
    </section>
  );
};

export default AutoSecureNewsDialoge;
