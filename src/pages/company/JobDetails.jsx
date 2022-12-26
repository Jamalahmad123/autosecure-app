import { useEffect } from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaRegClock,
  FaSuitcase,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import Wrapper from "../../components/ui/Wrapper";
import { jobs } from "../../data/constantData";
import { styles } from "../../Styles";
import { logo_sm } from "../../assets/images";
import JobsList from "./JobsList";
jobs;

const JobDetails = () => {
  const { id } = useParams();
  const [job] = jobs.filter((job) => job.id === +id);
  const { title, details } = job;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <main className="py-20">
        <Wrapper className="px-4">
          <header>
            <h2 className={`${styles.headingSecondary} text-clrPrimary`}>
              {title} (m/f/d)
            </h2>
            <p className="text-[20px] leading-[43px] md:text-[30px] text-clrPrimary mt-6 md:max-w-3xl">
              {details.desc}
            </p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-stretch mt-10 gap-5">
            <div className="py-4 lg:py-8 space-y-4 text-clrPrimary border-t lg:border-y border-clrPrimary">
              <FaMapMarkerAlt size={30} />
              <p className="text-clrPrimary text-lg font-bold font-AllianceBold">
                {details.location}
              </p>
            </div>
            <div className="py-4 lg:py-8 space-y-4 text-clrPrimary border-b lg:border-y border-clrPrimary">
              <FaRegClock size={30} />
              <p className="text-clrPrimary text-lg font-bold font-AllianceBold">
                {details.base}
              </p>
            </div>
            <div className="py-4 lg:py-8 space-y-4 text-clrPrimary border-b lg:border-y border-clrPrimary">
              <FaSuitcase size={30} />
              <p className="text-clrPrimary text-lg font-bold font-AllianceBold">
                {details.type}
              </p>
            </div>
          </div>
          <div className="py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className={`${styles.headingSecondary}`}>your taks</h2>
              <List list={details.tasks} />
            </div>
            <div>
              <h2 className={`${styles.headingSecondary}`}>your profile</h2>
              <List list={details.profile} />
            </div>
          </div>
          <div className="py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className={`${styles.headingSecondary}`}>
                What we offer you
              </h2>
              <List list={details.offer} />
            </div>
            <div className="space-y-12">
              <h2 className={`${styles.headingSecondary}`}>Apply now</h2>
              <div className="space-y-10">
                <Link
                  to="/company/career/job/apply-now"
                  className="btn py-8 h-0 px-4 text-lg font-mdeium capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-2 w-full rounded-none flex-nowrap"
                >
                  <img src={logo_sm} alt="logo" className="w-4" />
                  <span>Start the online application process</span>
                </Link>
                <div>
                  <p className="font-bold text-lg text-clrPrimary">
                    Or send your application by post to:
                  </p>
                  <p className="text-clrPrimary max-w-[200px] mt-4">
                    autosecure GmbH Stefan Chüo Hammer Strasse 39 48153 Münster
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:info@autosecure.net"
                    className="text-clrPrimary text-lg block"
                  >
                    E:{" "}
                    <span className="font-bold hover:opacity-80">
                      info@autosecure.net
                    </span>
                  </a>
                  <Link
                    to="/"
                    rel="noreferrel"
                    target="_blank"
                    className="text-clrPrimary text-lg"
                  >
                    W:{" "}
                    <span className="font-bold hover:opacity-80">
                      www.autosecure.net
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* recent job offer */}
          <div className="py-12">
            <JobsList />
          </div>
        </Wrapper>
      </main>
    </>
  );
};

const List = ({ list }) => {
  return (
    <ul className="mt-14 space-y-4">
      {list.map((item, i) => (
        <li
          className="text-base md:text-lg text-clrPrimary flex items-start gap-2"
          key={i}
        >
          <FaChevronRight className="min-w-[20px]" />
          {item}
        </li>
      ))}
    </ul>
  );
};

/** */

export default JobDetails;
