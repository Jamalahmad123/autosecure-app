import AccordionItem from "./AccordionItem";
import { styles } from "../../Styles";
import Wrapper from "./Wrapper";

const AccordionList = ({ list }) => {
  return (
    <>
      <Wrapper className="px-4">
        <div className={`items-start justify-start lg:${styles.flexCenter}`}>
          <ul className={`flex justify-center flex-col gap-6 max-w-2xl w-full`}>
            {list.map((item) => (
              <AccordionItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default AccordionList;
