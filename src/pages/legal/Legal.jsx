import { Link } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const Legal = () => {
  const legals = [
    {
      id: 2,
      name: "imprint",
      link: "legal/imprint",
    },
    {
      id: 3,
      name: "privacy",
      link: "legal/privacy",
    },
    {
      id: 4,
      name: "conditions",
      link: "legal/conditions",
    },
  ];
  return (
    <header className="pt-28 pb-14">
      <Wrapper className="md:px-10 px-4">
        <h1 className={`${styles.headingPrimary} text-clrPrimary`}>Legal</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-16">
          {legals.map((item) => (
            <Link
              to={`/${item.link}`}
              className="btn bg-clrPrimary text-white px-4 py-2 rounded-none capitalize text-xl font-normal hover:bg-clrLightblue"
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Wrapper>
    </header>
  );
};

export default Legal;
