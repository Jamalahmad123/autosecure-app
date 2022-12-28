import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaCheck } from "react-icons/fa";

import {
  autoLocateVideo,
  autoSecurityVideo,
  autoScanVideo,
} from "../../assets/videos";
import { autosecureLogistic } from "../../assets/images";

import { savingsAndExpertise } from "../../data/constantData";
import Spinner from "../../components/ui/Spinner";
import Wrapper from "../../components/ui/Wrapper";
import { styles } from "../../Styles";

// Lazy Imports
const PagesHero = lazy(() => import("../../components/PagesHero"));
const Hero = lazy(() => import("../../components/Hero"));
const SecuritySolutionCard = lazy(() =>
  import("../../components/SecuritySolutionCard")
);
const IndustrySectorSolutions = lazy(() =>
  import("../../components/IndustrySectorSolutions")
);
const AutosecureEcosystem = lazy(() =>
  import("../../components/AutosecureEcosystem")
);
const AnimatedCircle = lazy(() => import("../../components/ui/AnimatedCircle"));
const Features = lazy(() => import("../../components/Features"));

const solutions = [
  {
    id: 1,
    title: "Automated entry and exit control.",
    desc: "Automated trailer and dangerous goods detection, freight inspection to reduce manual handling and search effort are often still carried out manually in logistics today, with a high error rate and immense personnel costs. The new autosecure scan solution simplifies, digitizes and automates these routine tasks.",
    btnTitle: "security solutions",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    title: "Goods and goods with automatic booking process.",
    desc: "Manual and personnel-intensive routine tasks such as the booking of goods and goods are still carried out in many companies with high human resources and a high error rate. The new autosecure Locate solution automates these processes and ensures at least 20% faster process handling.",
    btnTitle: "Scanner solutions",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
  },
  {
    id: 3,
    title: "Theft and burglary problems on the company premises.",
    desc: "Machine and goods theft is a big problem for logisticians. Almost every company encounters permanent thefts. autosecure offers sensible and intelligent security solutions and ensures 100% protection for your valuables. By the way, with autosecure you achieve savings of at least 50% compared to personnel-based monitoring.",
    btnTitle: "Locate solutions",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
  },
];
const heroContent = {
  title: "Logistics & Goods",
  desc: "Automation solutions for logistics processes and goods tracking.",
  benefit1: "50% less security costs",
  benefit2: "20% faster processes",
  img: autosecureLogistic,
};
const animatedHeroContent = {
  title: "360° automation for logistics",
  desc: "Tailored to your requirements in the logistics process: Discover the autosecure 360° automation concept for logistics and goods.",
};

const LogisticsAndGoods = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <PagesHero {...heroContent} />
        <AutosecureEcosystem {...savingsAndExpertise} hasLogo />
        {solutions.map((item) => (
          <SecuritySolutionCard {...item} key={item.id} />
        ))}
        <FeaturesList />
        <Hero
          title={animatedHeroContent.title}
          desc={animatedHeroContent.desc}
        />
        <AnimatedCircle />
        <Features />
        <IndustrySectorSolutions />
      </Suspense>
    </>
  );
};

export default LogisticsAndGoods;

const featursArr = [
  "All information at the ramp",
  "Fully automated digital gatekeeper",
  "Reduced waiting times for logistics service providers and pickup customers",
  "Process visualization along the supply chain",
  "Targeted, intelligent and effective goods receipt and barrier management",
  "Approved travel order with the correct traffic routes to the ramp, which is perfectly prepared",
  "Already integrated solutions such as SAP S/4HANA are enriched with images for a driver transport order, dangerous goods classification, driver and vehicle (condition)",
  "Scanner-free warehouse automated goods recognition. Which goods are on which conveyor vehicle? Where do the goods have to go? No manual scanning. No process interruption.",
  "Seamless material supply through a continuous improvement process in production (Kanban)",
  "100% process assurance",
];

const FeaturesList = () => {
  return (
    <section className="py-20">
      <Wrapper className="px-4">
        <h1 className={`${styles.headingPrimary} text-clrPrimary`}>
          Highly efficient and intelligent yard management system
        </h1>
        <p className="text-lg font-normal md:text-[22px] md:leading-[3rem] lg:text-[35px] mt-8 mb-12 font-AllianceRegular text-clrPrimary">
          Imagine moving 200 trucks and coordinating 5,000 goods movements a
          day. Even with 3 forklift drivers, this volume is difficult to handle.
        </p>
        <p className="text-lg font-normal md:text-[22px] md:leading-[3rem] lg:text-[35px] font-AllianceRegular text-clrPrimary">
          What if automation led you to the point where only 2 or 1 forklift
          driver could handle the same workload in a relaxed manner, because
          targeted and intelligent automation could make the work uninterrupted
          and much more efficient? Talk to us.
        </p>

        <ul className="space-y-8 mt-12">
          {featursArr.map((f, i) => (
            <li className="flex items-start gap-2" key={i}>
              <FaCheck className="text-clrSky min-w-[35px]" size={25} />
              <p className="text-lg lg:text-2xl text-clrPrimary">{f}</p>
            </li>
          ))}
        </ul>

        <Link
          to="/company/contact"
          className="btn text-white lowercase font-normal text-base border-none bg-clrSky py-4 h-auto justify-center md:text-lg hover:bg-clrPrimary font-AllianceRegular mt-14"
        >
          make an appointment <FaCalendarCheck size={20} className="ml-5" />
        </Link>
      </Wrapper>
    </section>
  );
};
