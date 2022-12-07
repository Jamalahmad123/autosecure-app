import Achievements from "../../components/Achievements";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const News = () => {
  return (
    <>
      <header className="pt-24 pb-14">
        <Wrapper className="px-4">
          <h1 className={`${styles.headingPrimary} text-slate-800`}>
            News about our projects <br className="hidden md:block" /> and our
            company.
          </h1>
        </Wrapper>
      </header>
      <Achievements />
    </>
  );
};

export default News;
