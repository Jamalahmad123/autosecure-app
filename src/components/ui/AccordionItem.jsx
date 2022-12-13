import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { styles } from "../../Styles";

const AccordionItem = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <li className="w-full space-y-3">
        <p
          className="flex items-start text-clrPrimary cursor-pointer"
          onClick={handleToggle}
        >
          <FaChevronRight
            className={`mr-3 smooth ${show ? "-rotate-90" : "rotate-0"}`}
          />
          {item.listTitle}
        </p>
        {show && (
          <div
            className="w-full p-4 space-y-3 htmlContainer"
            dangerouslySetInnerHTML={{ __html: item.htmlItem }}
          />
        )}
      </li>
    </>
  );
};

export default AccordionItem;
