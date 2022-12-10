import { Link } from "react-router-dom";
import { logo_sm } from "../../assets/images";

const JobItem = ({ item }) => {
  return (
    <div className="flex items-start justify-between bg-white p-6 mt-6 rounded-lg gap-6 flex-col md:flex-row">
      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold font-AllianceBold text-clrPrimary">
        {item.title} <br />
        (m/f/d)
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:flex-row lg:gap-14 justify-between">
        <div className="space-y-2">
          <p className="text-clrPrimary text-base font-AllianceRegular md:max-w-[10rem]">
            {item.jobDesc}
          </p>
          <p className="text-clrPrimary text-base font-AllianceRegular">
            {item.location}
          </p>
          <span className="text-clrPrimary font-bold font-AllianceBold inline-block">
            {item.starting}
          </span>
        </div>
        <Link
          to={`/company/career/job/${item.id}`}
          className="btn btn-xl text-lg font-mdeium capitalize text-white bg-clrPrimary hover:bg-clrSky border-none gap-2"
        >
          <img src={logo_sm} alt="logo" className="w-4" />
          <span>Lear More</span>
        </Link>
      </div>
    </div>
  );
};

export default JobItem;
