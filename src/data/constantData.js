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
import {
  autoSecurityVideo,
  autoScanVideo,
  autoLocateVideo,
} from "../assets/videos";

export const navLinks = [
  {
    id: 1,
    name: "solutions",
    link: "solutions",
    subPages: [
      {
        id: 1,
        name: "security solutions",
        link: "solutions/security-solutions",
      },
      {
        id: 2,
        name: "scanner solutions",
        link: "solutions/scanner-solutions",
      },
      {
        id: 3,
        name: "localization solutions",
        link: "solutions/localization-solutions",
      },
    ],
  },
  {
    id: 2,
    name: "industry sectors",
    link: "industry",
    subPages: [
      {
        id: 1,
        name: "automobile & mobility",
        link: "industry/automobile-mobility",
      },
      {
        id: 2,
        name: "agriculture & formings",
        link: "industry/agriculture-formings",
      },
      {
        id: 3,
        name: "construction & construction vehicles",
        link: "industry/construction",
      },
      {
        id: 4,
        name: "logistics & goods",
        link: "industry/logistics-goods",
      },
    ],
  },
  {
    id: 3,
    name: "company",
    link: "company",
    subPages: [
      {
        id: 1,
        name: "about us",
        link: "company/about-us",
      },
      {
        id: 2,
        name: "news",
        link: "company/news",
      },
      {
        id: 3,
        name: "career",
        link: "company/career",
      },
      {
        id: 4,
        name: "values",
        link: "company/values",
      },
      {
        id: 5,
        name: "mission and vision",
        link: "company/mission-vision",
      },
      {
        id: 6,
        name: "contact",
        link: "company/contact",
      },
    ],
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
    title: "safe",
    desc: "Active video surveillance with live perpetrator address according to the SAVE principle.",
    benefit1: "50% less security costs",
    benefit2: "100% less claims",
    btnTitle: "security solutions",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    link: "#",
    title: "scan",
    desc: "Digital condition control, damage detection and documentation in real time.",
    benefit1: "100% condition detection of all vehicles",
    benefit2: "No discussions with customers",
    btnTitle: "Scanner solutions",
    videoPath: autoScanVideo,
  },

  {
    id: 3,
    link: "#",
    title: "locate",
    desc: "Precise real-time indoor and outdoor localization of goods or vehicles.",
    benefit1: "20% faster processes",
    benefit2: "More sales at less cost",
    btnTitle: "locate solutions",
    videoPath: autoLocateVideo,
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

export const ecosystemAndExpertise = {
  id: 1,
  title1: "Eco system",
  title2: "expertise",
  desc1: [
    "High-end web platform for integrating all autosecure services",
    "Software for the maximum simplification of business processes",
    "Cloud-based user account",
    "Considerable reduction of e-mail correspondence, telephone calls or search effort",
    "Centralized provision of information and vehicle documentation",
    "Maximum transparency and simplification of vehicle search processes",
  ],
  desc2: [
    "10+ years of know-how",
    "Leading in the development of software and future-oriented technologies",
    "Highly qualified staff",
    "Regular training and further education",
    "24/7 monitoring & service control center",
    "State-of-the-art video technology & IoT",
    "Interfaces for customer-specific ERP systems",
    "Specialized in leasing and financing models as well as insurance protection",
    "Data protection security",
    "Certified HIKVISION Platinum Partner",
    "Approval as a security company according to § 34a GewO",
  ],
};

export const savingsAndExpertise = {
  id: 1,
  title1: "potential savings",
  title2: "expertise",
  desc1: [
    "At least 50% reduction in security costs compared to personnel-based monitoring solutions.",
    "20% faster vehicle and customer processes.",
    "Investment security due to the most modern and future-oriented technology solutions.",
    "Medium-term reduction of insurance premiums due to the absence of theft and damage events.",
    "Significant savings in time and research effort for events to be clarified on the company premises.",
    "Up to 5 years warranty on the hardware used.",
  ],

  desc2: [
    "10+ years of know-how",
    "Leading in the development of software and future-oriented technologies",
    "Highly qualified staff",
    "Regular training and further education",
    "24/7 monitoring & service control center",
    "State-of-the-art video technology & IoT",
    "Interfaces for customer-specific ERP systems",
    "Specialized in leasing and financing models as well as insurance protection",
    "Data protection security",
  ],
};

export const ecosystemAndParkingSystem = {
  id: 1,
  title1: "Eco system",
  title2: "parking management.",
  desc1: [
    "High-end web platform for integrating all autosecure services",
    "Software for the maximum simplification of business processes",
    "Cloud-based user account",
    "Considerable reduction of e-mail correspondence, telephone calls or search effort",
    "Centralized provision of information and vehicle documentation",
    "Maximum transparency and simplification of vehicle search processes",
  ],
  desc2: [
    "Vehicles with and without license plates can be found more quickly",
    "Automated parking & vehicle management with easy search function",
    "Optional positioning of FindMyCar terminals",
  ],
};

export const vehicleAndPlateRecognition = {
  id: 1,
  title1: "Vehicle movement monitoring.",
  title2: "Automatic license plate recognition.",
  desc1: [
    "Avoid stationary damage by recording vehicle movements with an automated warning function based on the dwell time of vehicles",
    "Service life monitoring to increase efficiency in the car dealership process ",
  ],
  desc2: [
    "Automatic notification of your employees and assignment of the customer file when a customer visits for a personal greeting",
    "Blacklist alert and VIP notification",
    "penalties for parking violations",
  ],
};
