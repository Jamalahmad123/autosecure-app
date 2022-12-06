import { Link } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import { navLinks } from "../../data/constantData";
import { styles } from "../../Styles";

const Compnay = () => {
  const [companyLinks] = navLinks.filter((item) => item.name === "company");

  return (
    <>
      <header className="pt-28 pb-14">
        <Wrapper className="md:px-10 px-4">
          <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
            Company
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-16">
            {companyLinks.subPages.map((item, i) => (
              <Link
                to={`/${item.link}`}
                className="btn bg-clrPrimary text-white px-4 py-2 rounded-none"
                key={i}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Compnay;
