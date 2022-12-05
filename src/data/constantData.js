import {
  autosecureAutomechanika,
  autosecureConstruction,
  autosecureFarming,
  autosecureHikvision,
  autosecureHipeAward,
  autosecureLogistic,
  autosecureneumuenster,
  autosecureNewsEcosystem,
  autosecurePartnerZukunftswerkstatt,
  autosecureVehicle,
} from "../assets/images";

export const navLinks = [
  {
    id: 1,
    name: "solutions",
    link: "solutions",
    links: [
      "security solutions",
      "scanner solutions",
      "localization solutions",
    ],
  },
  {
    id: 2,
    name: "industry sectors",
    link: "industry",
    links: [
      "automobile & mobility",
      "agriculture & formings",
      "construction & construction vehicles",
      "logistics & goods",
    ],
  },
  {
    id: 3,
    name: "company",
    link: "company",
    links: ["about", "news", "career", "values", "vision", "contact"],
  },
];

// industry sector solution
export const industrySector = [
  {
    id: 1,
    link: "#",
    name: "Automobiles & Mobility",
    desc: "Automation solutions for car dealerships, car parks and vehicle rental companies.",
    benefit1: "50% less security costs",
    benefit2: "20% faster process",
    image: autosecureVehicle,
  },
  {
    id: 2,
    link: "#",
    name: "Construction & construction vehicles",
    desc: "Automation solutions for the construction site of the future.",
    benefit1: "50% less security costs",
    benefit2: "20% faster process",
    image: autosecureConstruction,
  },
  {
    id: 3,
    link: "#",
    name: "Agriculturing & Farming",
    desc: "Technology-based solutions for the farmer of tomorrow.",
    benefit1: "Digital entry and exit control",
    benefit2: "Digital release of entry and exit authorizations",
    image: autosecureFarming,
  },
  {
    id: 4,
    link: "#",
    name: "Logistics & Goods",
    desc: "Automation solutions for logistics processes and goods tracking.",
    benefit1: "50% less security costs",
    benefit2: "20% faster process",
    image: autosecureLogistic,
  },
];

export const features = [
  {
    id: 1,
    link: "#",
    name: "safe",
    desc: "Active video surveillance with live perpetrator address according to the SAVE principle.",
    benefit1: "50% less security costs",
    benefit2: "100% less claims",
    btnTitle: "security solutions",
  },
  {
    id: 2,
    link: "#",
    name: "scan",
    desc: "Digital condition control, damage detection and documentation in real time.",
    benefit1: "100% condition detection of all vehicles",
    benefit2: "No discussions with customers",
    btnTitle: "Scanner solutions",
  },

  {
    id: 3,
    link: "#",
    name: "locate",
    desc: "Precise real-time indoor and outdoor localization of goods or vehicles.",
    benefit1: "20% faster processes",
    benefit2: "More sales at less cost",
    btnTitle: "locate solutions",
  },
];

export const acheivements = [
  {
    id: 0,
    title: "Autosecure goes Automechanika 2022",
    image: autosecureAutomechanika,
  },
  {
    id: 1,
    title: "autosecure ecosystem officially launched",
    image: autosecureNewsEcosystem,
  },

  {
    id: 2,
    title: "HIPE Award for autosecure",
    image: autosecureHipeAward,
  },
  {
    id: 3,
    title: "Securing of the large Süverkrüp farm in Neumünster.",
    image: autosecureneumuenster,
  },
  {
    id: 4,
    title: "autosecure becomes a technology partner of the future workshop 4.0",
    image: autosecurePartnerZukunftswerkstatt,
  },
  {
    id: 5,
    title: "HikVision Outstanding Performance Award for autosecure",
    image: autosecureHikvision,
  },
];
//
