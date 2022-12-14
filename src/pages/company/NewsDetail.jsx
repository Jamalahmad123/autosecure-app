import { useParams } from "react-router-dom";
import AutoSecureNewsDialoge from "../../components/AutoSecureNewsDialoge";
import Achievements from "../../components/Achievements";
import { acheivements } from "../../data/constantData";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

const NewsDetail = () => {
  const { id } = useParams();
  const [news] = acheivements.filter((item) => item.id === id);
  const { title, image, details } = news;
  return (
    <>
      <main className="py-20">
        <Wrapper className="px-4">
          <header>
            <p className="text-sm font-light text-clrPrimary">{details.date}</p>
            <h2
              className={`${styles.headingPrimary} text-clrPrimary max-w-2xl my-8`}
            >
              {title}
            </h2>
            <figure>
              <img src={image} alt={title} className="w-full rounded-lg" />
            </figure>
            <p className="text-[20px] leading-[43px] md:text-[30px] text-clrPrimary mt-6 md:max-w-2xl">
              {details.desc}
            </p>
          </header>
          <div
            className="mt-8 md:max-w-3xl text-base lg:text-xl space-y-6 htmlContainer"
            dangerouslySetInnerHTML={{ __html: details.html }}
          />
        </Wrapper>
      </main>
      <AutoSecureNewsDialoge />
      <Achievements />
    </>
  );
};

export default NewsDetail;
