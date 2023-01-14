import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";
import MeetingVideo from "../../components/ui/MeetingVideo";
import { poster, booking } from "../../assets/images";
import { auto_secure_meeting } from "../../assets/videos";
import { useTitle } from "../../hooks/customHooks";

const Values = () => {
  useTitle("Values – autosecure | Secure. Scan. Locate.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4 mb-6">
          <p className="text-lg text-clrPrimary">Unsere Werte.</p>
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            Vertrauen. Integrität.
          </h1>
          <p className={`${styles.textPrimary} my-8 text-clrPrimary`}>
            Mit autosecure erhalten Sie nicht nur führende technologiebasierte
            Automations-Lösungen, sondern einen aufrichtigen Partner, auf den
            Sie sich jederzeit verlassen können.
          </p>
          <Link
            to="/company/contact"
            className="link link-neutral text-lg inline-block text-clrPrimary"
          >
            <FaCalendarAlt className="inline-block mr-4" />
            Beratungs-Gespräch vereinbaren
          </Link>
        </Wrapper>
        <MeetingVideo videoPath={auto_secure_meeting} poster={booking} />
      </header>
    </>
  );
};

export default Values;
