import { Link } from "react-router-dom";
import { logo_sm } from "../assets/images";

import { styles } from "../Styles";
import Wrapper from "./ui/Wrapper";

const SecuritySolutionCard = ({
  title,
  desc,
  btnTitle,
  path,
  videoPath,
  id,
}) => {
  return (
    <Wrapper className="px-4 py-12 space-y-8">
      <div>
        <video
          autoPlay
          muted
          preload="metadata"
          className="max-w-4xl border-none"
        >
          <source src={videoPath} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <p className="text-clrSky text-lg font-bold font-AllianceBold mt-4">
          Solutin {id}
        </p>
      </div>
      <h2 className={`${styles.headingSecondary} text-clrPrimary`}>{title}</h2>
      <p className="text-base text-clrPrimary">{desc}</p>
      <Link
        to={path}
        className="btn py-4 h-auto text-lg font-medium lg:text-xl capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-2"
      >
        <img src={logo_sm} alt="logo" className="w-4" />
        <span>{btnTitle}</span>
      </Link>
    </Wrapper>
  );
};

export default SecuritySolutionCard;
