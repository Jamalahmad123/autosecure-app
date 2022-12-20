import { FaChevronRight } from "react-icons/fa";
import Wrapper from "./ui/Wrapper";
import { styles } from "../Styles";

const monitering = {
  id: 1,
  title: "Monitoring in the alarm center.",
  features: [
    "For the security of your company, we rely on exclusive partnerships with VdS-approved emergency and service control centers. We provide our security services with strong partners based on the following certifications.",
    "Specially set up autosecure video workstations ensure individual support according to jointly defined standards.",
    "In this way, we guarantee adequate alarm processing and deployment tracking according to the highest quality standards. We continuously measure the performance of our service",
  ],
};

const improveRisk = {
  id: 1,
  title: "Improve the risk situation and save on insurance premiums!",
  features: [
    "With your investment in more security, you improve your risk and insurance situation.",
    "We offer you the opportunity to have your operational risks and insurances re-evaluated by experts, to optimize the scope of insurance and to save on insurance premiums - and all this at no cost.",
    "The experts also check whether and to what extent the insurer will contribute to the costs of your investment in more security.",
  ],
};

const privacy = {
  id: 1,
  title: "privacy",
  features: [
    "The protection of personal data is a central feature of professional services.",
    "The data recorded by the cameras is consistently protected and used in accordance with data protection regulations via jointly agreed order data processing contracts.",
    "Signage on your premises ensures GDPR-compliant visibility of your security solution. This gives you and your customers legal certainty.",
    "This gives you and your customers legal certainty .",
  ],
};

const AutosecureApplications = () => {
  return (
    <section className="py-14 bg-clrVeryLightGray">
      <Wrapper className="px-4 space-y-16">
        <header>
          <h2
            className={`${styles.headingSecondary} text-clrPrimary font-normal text-center`}
          >
            More Applications
          </h2>
        </header>
        <div className="flex items-start justify-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            Heat mapping for optimal item placement and maximum revenue.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            Heat mapping for optimal item placement and maximum revenue. With
            heat mapping, the retailer can create a color-coded map of how much
            time customers spend in each area of ​​the store. Not only can this
            be used to identify areas that are performing well and poorly, it
            also makes it clear how many customers are looking for a specific
            product and how many customers are adding products to their shopping
            cart.
          </p>
        </div>
        <div className="flex justify-start items-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            People counting - get the numbers - and the business.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            If you know how many customers come into your store throughout the
            day, there are several ways to optimize your operations. For
            example, you can tailor your staffing to customer needs at peak
            times to optimize your service, and work with a reduced workforce at
            off-peak times to save costs.
          </p>
        </div>
        <div className="flex justify-start items-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            Queue detection - better customer experience.
          </h2>
          <p className="flex items-start gap-4 text-clrPrimary flex-1">
            <FaChevronRight className="min-w-[20px]" />
            Queue detection counts the number of people in the queue using
            cameras. As soon as a certain limit is reached and more customers
            rush to checkout, the system notifies management so that more
            checkouts can be opened.
          </p>
        </div>
        <div className="flex justify-start items-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1">
            {monitering.title}
          </h2>
          <div className="space-y-4 flex-1">
            {monitering.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1 pr-8">
            {improveRisk.title}
          </h2>
          <div className="space-y-4 flex-1">
            {improveRisk.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-start md:gap-6 flex-col lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-xl lg:text-3xl font-bold font-AllianceBold flex-1 pr-8">
            {privacy.title}
          </h2>
          <div className="space-y-4 flex-1">
            {privacy.features.map((item, i) => (
              <p
                className="flex items-start gap-4 text-clrPrimary flex-1"
                key={i}
              >
                <FaChevronRight className="min-w-[20px]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AutosecureApplications;
