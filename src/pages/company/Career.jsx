import { FaFileAlt } from "react-icons/fa";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";
import JobsList from "./JobsList";

const Career = () => {
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4 space-y-8">
          <div>
            <p className="text-lg text-clrPrimary">Career.</p>
            <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
              Get started now with autosecure.
            </h1>
          </div>
          <p className={`${styles.textPrimary} text-clrPrimary`}>
            autosecure is the specialist for leading technology-based automation
            solutions for the automotive and mobility industry.
          </p>
          <h2 className="text-clrPrimary text-lg lg:text-2xl font-AllianceBold font-bold">
            Support our team in Münster and our nationwide clients with leading
            solutions to achieve real added value.
          </h2>
          <a className="link link-neutral text-lg inline-block text-clrPrimary">
            <FaFileAlt className="inline-block mr-4" />
            To the application form
          </a>
        </Wrapper>
      </header>
      <JobsList />
    </>
  );
};

export default Career;
