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

export const systemTakeoverAndSystemArc = {
  id: 1,
  title1: "system takeover.",
  titleOneDesc:
    "Seamless integration of your existing camera system into the autosecure ecosystem.",
  title2: "State-of-the-art system architecture.",
  titleTwoDesc: "Security made in Germany.",
  desc1: [
    "Upgrade your existing camera intelligence with autosecure AI technology.",
    "Free takeover and integration of existing camera infrastructure.",
    "Optimizing or closing gaps in your current camera system.",
  ],
  desc2: [
    "Cloud hosting and German data centers – with geo-redundancy if required.",
    "On-site NVR (Network Video Recorder) as a local storage medium with a completely variable storage period (30 / 60 / 90 days depending on customer requirements).",
    "Dual transmission paths (DSL, LTE).",
  ],
};

export const deepLearningAndQualityImgs = {
  id: 1,
  title1: "deep learning",
  titleOneDesc: "Intelligence in the cameras.",
  feature1: "> 95% real alarm rate",
  title2: "Brilliant image quality. Saturated colors.",
  titleTwoDesc: "Even in complete darkness.",
  feature2: "> Real color rendering from as little as 0.01 lux.",
  desc1: [
    "Innovative DeepLearning algorithm for alarm generation.",
    "The magic behind it all: important events are put in the spotlight.",
    "As the name suggests, the technology used offers the lowest false alarm rate . This reduces the effort in the alarm center and forms the basis for security services of the highest quality.",
    "Precise alarm: Thanks to deep learning algorithms, the technology distinguishes people and vehicles from other moving targets.",
    "False alarms caused by light reflections, small animals, dogs, cats, martens, etc. are a thing of the past in 95% of cases.",
  ],
  desc2: [
    "What's the challenge?",
    "The darkness provides protection for theft, trespassing and other crimes.",
    "When a traditional camera with infrared illumination is used for night surveillance, people, vehicles or other important objects are blurred and fade into the background, making it difficult to see details.",
    "Color-related information is crucial for many scenarios and represents a great enrichment for data and analysis. However, conventional cameras often lose important details when only displaying black-and-white images. Our technology is our solution to this common challenge faced by many security system users.",
  ],
};

export const packages = [
  {
    id: 1,
    title: "financing",
    benefits: [
      "Flexible leasing options or purchase",
      "Free, tailored investment advice from financing partners",
    ],
  },
  {
    id: 2,
    title: "products",
    benefits: [
      "Trend awareness in hardware and software development",
      "Sustainably constant product availability",
    ],
  },
  {
    id: 3,
    title: "Installation according to VDE 0100",
    benefits: [
      "Highest execution quality through decades of experience with camera surveillance and ELA systems",
    ],
  },
  {
    id: 4,
    title: "service",
    benefits: [
      "Proactive troubleshooting and service promise",
      "Individual service packages, reliable routine checks = optimal failure prevention and longevity",
    ],
  },
  {
    id: 5,
    title: "security center",
    benefits: [
      "Operational and alarm monitoring by emergency and service control center 24/7",
      "Certification according to VdS 2172: 2005-12",
    ],
  },
  {
    id: 6,
    title: "insurance",
    benefits: [
      "Security only with insurance",
      "Option to have an insurance quote tailored to your investment in security",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    title: "Area Sales Manager North",
    jobDesc: "Permanent position / full-time",
    location: "Germany North",
    starting: "From now on",
  },
  {
    id: 2,
    title: "Area Sales Manager South",
    jobDesc: "Permanent position / full-time",
    location: " Germany-South",
    starting: "From now on",
  },
  {
    id: 3,
    title: "App developer iOS & Android",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },
  {
    id: 4,
    title: "Frontend Developer Laravel, PHP",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },
  {
    id: 5,
    title: "IT support",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },
  {
    id: 6,
    title: "Junior Account Manager",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },

  {
    id: 7,
    title: "System engineer / IT technology in the field",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },
  {
    id: 8,
    title: "Business Development Intern",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
  },
];
