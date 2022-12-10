import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

import { jobs } from "../../data/constantData";
import JobItem from "./JobItem";

const JobsList = () => {
  return (
    <>
      <Wrapper className="px-4 py-14">
        <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
          recent job offers
        </h2>
        <div className="space-y-10">
          {jobs.map((item) => (
            <JobItem item={item} key={item.id} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default JobsList;
