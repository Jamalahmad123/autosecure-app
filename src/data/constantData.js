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
    link: "/industry/automobile-mobility",
    name: "Automobiles & Mobility",
    desc: "Automation solutions for car dealerships, car parks and vehicle rental companies.",
    benefit1: "50% less security costs",
    benefit2: "20% faster process",
    image: autosecureVehicle,
  },
  {
    id: 2,
    link: "/industry/construction",
    name: "Construction & construction vehicles",
    desc: "Automation solutions for the construction site of the future.",
    benefit1: "50% less security costs",
    benefit2: "20% faster process",
    image: autosecureConstruction,
  },
  {
    id: 3,
    link: "/industry/agriculture-formings",
    name: "Agriculturing & Farming",
    desc: "Technology-based solutions for the farmer of tomorrow.",
    benefit1: "Digital entry and exit control",
    benefit2: "Digital release of entry and exit authorizations",
    image: autosecureFarming,
  },
  {
    id: 4,
    link: "/industry/logistics-goods",
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
    link: "/solutions/security-solutions",
    title: "safe",
    desc: "Active video surveillance with live perpetrator address according to the SAVE principle.",
    benefit1: "50% less security costs",
    benefit2: "100% less claims",
    btnTitle: "security solutions",
    videoPath: autoSecurityVideo,
  },
  {
    id: 2,
    link: "/solutions/scanner-solutions",
    title: "scan",
    desc: "Digital condition control, damage detection and documentation in real time.",
    benefit1: "100% condition detection of all vehicles",
    benefit2: "No discussions with customers",
    btnTitle: "Scanner solutions",
    videoPath: autoScanVideo,
  },

  {
    id: 3,
    link: "/solutions/localization-solutions",
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
    id: "autosecure-goes-automechanika-2022",
    title: "Autosecure goes Automechanika 2022",
    image: autosecureAutomechanika,
    details: {
      id: 1,
      date: "Munster, September 8, 2022",
      desc: "Safe. Scan. locate. The automation specialist autosecure will present its new car scanner at the automechanika Frankfurt 2022 as part of the future workshop 4.0. Visit us in Hall 9.0, Stand E62.",
      html: `
        <p>
        autosecure's car scanner offers you digital condition monitoring, damage detection and documentation in real time. Record 100% of all vehicles entering or leaving your premises. Document the condition of each individual vehicle automatically and in real time. This ensures that you can prove at any time which vehicle was in which condition and when. <br /><br />

        The car scanner is particularly interesting for car dealerships, car parks and vehicle rental companies, who repeatedly have discussions with their customers about who caused damage to the vehicle and are often left with the costs of repairs. With the autosecure car scanner, these problems are a thing of the past - because you can prove the condition of the vehicle at any time without any doubt.</p>
        
        
        <p>All features of our car scanner at a glance:</p>
        <ul>
          <li>Digital and complete vehicle status check at property access, direct acceptance or at a freely selectable location on the premises.</li>
          <li>Digital vehicle assessment in real time for visual condition assessments and impairment reports.</li>
          <li>Reduction of manual assessment costs.</li>
          <li>Seamless integration of the autosecure solutions into in-house IT infrastructure (ERP modeling).</li>
          <li>Useful further use of the recordings, for example for internal process transparency or as support for the required assessment process by the testing service provider.</li>
          <li>Automatic assignment of the vehicle through license plate recognition or digital location in combination with autosecure-Locate.</li>
          <li>Increase in throughput speed.</li>
        </ul>
        <p>Visit our autosecure booth in hall 9.0, booth E62. We look forward to your visit and would be happy to demonstrate to you how you can use our auto scanner to solve many problems, save costs and automate processes in the future. <br /><br />

        More information about our auto scanner for you on our website at <a href="/solutions/scanner-solutions"><b>scan.autosecure.net</b></a>
        </p> 
      `,
    },
  },
  {
    id: "autosecure-eco-system-offiziell-gestarted",
    title: "autosecure ecosystem officially launched",
    image: autosecureNewsEcosystem,
    details: {
      date: "Munster, April 11, 2022",
      desc: "The digitization of your site security goes to a new level with autosecure. We are happy to announce that a few days ago we officially launched our new autosecure ecosystem.",
      html: `
        <p>The autosecure ecosystem is our new high-end web platform for the integration of all our services:</p> <br />
        <ul>
          <li>Web platform for maximum simplification of business processes</li>
          <li>Cloud-based user account</li>
          <li>Considerable reduction in e-mail correspondence, telephone calls or search effort</li>
          <li>Centralized provision of information and documentation
          Maximum transparency for events</li>
        </ul> <br />
        <p>
        This takes you to the portal <br />
        <a href="https://app.autosecure.net">https://app.autosecure.net</a> <br /> <br />
        
        You will receive your access data in a separate email today.<br /> <br />
        
        With the autosecure ecosystem, communication between you and our colleagues in the control center is raised to a new digital level. Detected events at your property will in future be recorded directly in the ecosystem and made available in real time in a collected overview. In addition, you will automatically receive an e-mail at 8 a.m. in the morning with all the events recorded at your property in the last 24 hours. Of course you can also deactivate the e-mail notification in the settings. <br /> <br />
        
        Would you like to leave registrations for vehicle collections or special information for us? Use the "Object notes" function and leave us messages without any problems. <br /> <br />
        
        In the autosecure Eco-System, we store all available documents such as camera plans, coordinated alarm plans and property information for your property as standard. You will also find our agreed schedules and other object remarks here. This means that we have all the relevant information in one place and we save a lot of time and nerves for both of us. <br /> <br />
        
        Do you have any questions about the ecosystem or would you like individual training in the system? We are always at your service!
        </p>
      `,
    },
  },

  {
    id: "hipe-award-fuer-autosecure",
    title: "HIPE Award for autosecure",
    image: autosecureHipeAward,
    details: {
      date: "Munster, April 4, 2022",
      desc: "The autosecure company receives the HIPE Award 2022 – a clear recommendation for our service with an overall rating of 1.7.",
      html: `
        <p>The HIPE Award stands for a clear recommendation of the service of an excellent company. The companies that are nominated and honored for the HIPE Award are characterized by more qualitative security and outstanding service. With an overall grade of 1.7, autosecure received one of the most coveted awards for companies in German-speaking countries.</p>

        <p>“We are very happy about this award - it shows the good development of our company and our team. As a high-quality service provider for secure, scan and locate solutions, this is further proof that our service is right.” explains autosecure Managing Director Stefan Chüo.</p>
        
        <p>autosecure GmbH from Münster specializes in leading technology-based automation solutions for the automotive and mobility industry and, in addition to <a href="/solutions/security-solutions">security technologies</a> , also offers <a href="/solutions/scanner-solutions">auto scanner solutions</a> for digital status control, damage detection and documentation in real time, as well as <a href="/solutions/localization-solutions">locate solutions</a> for precise localization of goods or vehicles indoors and outdoors.</p> <br />
        <img src="/autosecure_hipe_award_2.jpg" />
      `,
    },
  },
  {
    id: "sicherung-des-grossbetriebes-sueverkruep-in-muenster",
    title: "Securing of the large Süverkrüp farm in Neumünster.",
    image: autosecureneumuenster,
    details: {
      date: "Munster, November 13, 2021",
      desc: "Family businesses think in terms of generations, not financial years. With the forward-looking security solutions from autosecure, the Süverkrüp car dealership group from Schleswig Holstein has opted for the next generation of technology-based and fully automated security for site security.",
      html: `
        <p>"The family company Süverkrüp, with its 111-year history, its 17 locations throughout Germany and its 9 car brands, has always been at the top of our list of desired customers at autosecure. We are all the more pleased to be able to secure the Neumünster location for this traditional car dealership group with our future-oriented and automated <a href="/solutions/security-solutions">safety technologies and to help the Süverkrüp family of entrepreneurs no longer have to make compromises when it comes to safety"</a>. Stefan Chüo, Managing Director of autosecure GmbH, is pleased.</p>

        <p>Above all, <a href="/solutions/security-solutions">autosecure's holistic security approach</a> was convincing . With the support of artificial intelligence, machine learning technology and the use of the latest high-end cameras on the one hand - and a <a href="/solutions/security-solutions">360° security concept with live perpetrator addressing</a> , our own 24/7 security center with active troubleshooting, the specially developed autosecure SAVE principle and the in-depth security know-how of the autosecure team on the other hand - form the perfect symbiosis for 100% less damage and up to 50% cost savings in the security area.</p>

        <p>In addition to the added value mentioned for the Süverkrüp location in Neumünster, there were other factors with which autosecure was able to convince as a new security partner. Due to the absence of theft and damage events and the 100% security guarantee from autosecure, not only costs for insurance premiums can be saved in the medium term, but also the time and research effort for events to be clarified on the company premises can be significantly reduced. A hardware guarantee of up to 5 years contributes to investment security - and the smart financing and leasing models from autosecure protect liquidity on the customer side.</p>
      
        <p>autosecure GmbH from Münster specializes in leading technology-based automation solutions for the automotive and mobility industry and, in addition to <a href="/solutions/security-solutions">security technologies</a> , also offers <a href="/solutions/scanner-solutions">auto scanner solutions</a> for digital status control, damage detection and documentation in real time, as well as <a href="/solutions/localization-solutions">locate solutions</a> for precise localization of goods or vehicles indoors and outdoors.</p>
      `,
    },
  },
  {
    id: "autosecure-wird-technologie-partner-der-zukunftswerkstatt-4-0",
    title: "autosecure becomes a technology partner of the future workshop 4.0",
    image: autosecurePartnerZukunftswerkstatt,
    details: {
      date: "Munster, November 10, 2021",
      desc: `Under the chairmanship of Economics and Labor Minister Dr. Nicole Hoffmeister-Kraut, the steering committee of the "Automotive Industry Transformation Council" in Baden-Württemberg launched the "Future Workshop 4.0" for the automotive industry. Companies in the motor vehicle trade should prepare for the technological transformation process at an early stage in order to secure future employment in the sector. As a specialist for smart and forward-looking solutions in the areas of security, scan and locate for the automotive and mobility industry, the technology company autosecure will be on board as a technology partner of the future workshop 4.0.`,
      html: `
        <p>The Future Workshop 4.0 in Esslingen near Stuttgart takes on the role of an "innovation showcase", with the help of which new technologies and systems are tested along the customer journey in sales and after-sales. Conceptually, the future workshop 4.0 represents a real place where the actual structures and processes of a car dealership company are realistically and practically mapped.</p>
        
        <p>"As a technology company and specialist for the automotive and mobility industry, it was obvious for autosecure to strive for a partnership with Zukunftswerkstatt 4.0. We are pleased to present our smart <a href="/solutions/security-solutions">security</a> , <a href="/solutions/scanner-solutions">scan</a> and <a href="/solutions/localization-solutions">locate</a> solutions in the showroom of the future workshop 4.0 and to demonstrate our future-oriented products and their added value for car dealerships, car parks or vehicle rental companies to interested parties as part of the "innovation showcase", explains Stefan Chüo , CEO of autosecure, the new partnership.</p>

        <p>autosecure GmbH from Münster specializes in leading technology-based automation solutions for the automotive and mobility industry and, in addition to <a href="/solutions/security-solutions">security technologies</a> , also offers <a href="/solutions/scanner-solutions">auto scanner solutions</a> for digital status control, damage detection and documentation in real time, as well as <a href="/solutions/localization-solutions">locate solutions</a> for precise localization of goods or vehicles indoors and outdoors.</p>
      `,
    },
  },
  {
    id: "hikvision-outstanding-performance-award-fuer-autosecure",
    title: "HikVision Outstanding Performance Award for autosecure",
    image: autosecureHikvision,
    details: {
      date: "Munster, November 2, 2021",
      desc: "Special award for autosecure from Münster. The listed technology company HikVision with over 42,000 employees and leading IoT solutions in the field of video remote security presents the security and automation specialist autosecure with the Outstanding Performance Award for outstanding achievements.",
      html: `
        <p>Hardware and software in perfect symbiosis. HikVision's products are considered the gold standard in the field of video technologies and combine hardware and software with unique features in the field of <a href="/solutions/security-solutions">video remote security</a> . Starting with the simplest installation, SeeClear technology in absolute darkness, deep learning algorithms and the use of artificial intelligence, high-end 4K resolution for razor-sharp and smooth images, seamless image stitching technology for covering large areas with just one Camera to thermal imaging technology for the visibility of thermal radiation - all these properties form the basis for the fully automated video remote security solutions from autosecure.</p>

        <p>"With the hardware and software technology from our partner company HikVision and the holistic <a href="/solutions/security-solutions">security</a> concept from autosecure, we are able to reduce costs for personnel-based surveillance solutions by at least 50% and at the same time guarantee 100% fewer cases of damage". explains autosecure Managing Director Stefan Chüo.</p>

        <p>autosecure specializes in technology-based automation solutions for the automotive and mobility industry and, in the area of ​<a href="/solutions/security-solutions">security solutions</a> , offers active video surveillance with live perpetrator addressing based on the specially developed SAVE principle. The in-house alarm center for real-time monitoring and live addressing of criminals ensures 24/7 automated security and can be seamlessly integrated into the individual business processes on the customer side for each location. Smart financing and leasing models avoid high investment costs and protect the company's liquidity.</p>

        <p>"For many of our customers from the automotive industry - especially car dealerships and car parks - with an extensive product portfolio and large areas, the issue of security plays a central role. With our partner HikVision, we can not only guarantee investment security due to the most modern and future-oriented technologies, but also help our customers in the medium term to reduce insurance premiums due to the absence of theft and damage events and considerable savings in time and research effort for events to be clarified on the company premises". explains autosecure Managing Director Stefan Chüo.</p>

        <p>The high demand for the technology ​<a href="/solutions/security-solutions">-based and fully automated security solutions</a> from autosecure proves the added value on the customer side. Within a year of its founding, well-known companies from the automotive and mobility sectors were among the customer portfolio and relied on future-oriented security solutions from autosecure. These achievements have now been honored with the Outstanding Performance Award from HikVision - one of the world's leading manufacturers in the field of video remote security.</p>
        <p>More information about HikVision at ​<a href="https://www.hikvision.com/de/">www.hikvision.com/de/</a>.</p>
        <p></p>
      `,
    },
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
    type: "Permanent position / full-time",
    location: "Germany North",
    starting: "From now on",
    details: {
      desc: "autosecure GmbH is a young company headquartered in Münster in the field of intelligent security technology and innovative hardware and software solutions for the automotive trade and automotive logistics. We operate nationwide and have grown very strongly since our foundation in 2020. In order to continue this development, we would like to further strengthen our sales and are looking for an Area Sales Manager for the North Germany area as soon as possible.",
      location:
        "Cologne, Dortmund, Kassel, Bielefeld, Hanover, Magdeburg, Leipzig, Dresden, Berlin, Hamburg, Kiel",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Acquisition of new customers and continuous market development in the agreed sales area",
        "Competent and comprehensive advice for interested parties as well as maintenance of active relationship management in the portfolio",
        "Professional preparation of offers and contracts, implementation of offer presentations and target-oriented contract negotiations",
        "Support and participation in specialist conferences/conventions and trade fairs",
      ],
      profile: [
        "Many years of extensive professional experience in field sales with a high affinity for digitization and innovative technologies are preferred. But career changers and junior account managers are also interesting for us.",
        "Strong communication skills, high sense of mission",
        "Sales strength, empathy and negotiation skills",
        "Structured way of working, service orientation",
        "High willingness to travel",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, performance-related remuneration and a permanent employment contract",
      ],
    },
  },
  {
    id: 2,
    title: "Area Sales Manager South",
    jobDesc: "Permanent position / full-time",
    location: " Germany-South",
    starting: "From now on",
    details: {
      desc: "autosecure GmbH is a young company headquartered in Münster in the field of intelligent security technology and innovative hardware and software solutions for the automotive trade and automotive logistics. We operate nationwide and have grown very strongly since our foundation in 2020. In order to continue this development, we would like to further strengthen our sales and are looking for an Area Sales Manager for the southern Germany area as soon as possible.",
      location:
        "Frankfurt am Main, Saarbrücken, Karlsruhe, Stuttgart, Munich, Passau, Nuremberg, Hof",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Acquisition of new customers and continuous market development in the agreed sales area",
        "Competent and comprehensive advice for interested parties as well as maintenance of active relationship management in the portfolio",
        "Professional preparation of offers and contracts, implementation of offer presentations and target-oriented contract negotiations",
        "Support and participation in specialist conferences/conventions and trade fairs",
      ],
      profile: [
        "Many years of extensive professional experience in field sales with a high affinity for digitization and innovative technologies are preferred. But career changers and junior account managers are also interesting for us.",
        "Strong communication skills, high sense of mission",
        "Sales strength, empathy and negotiation skills",
        "Structured way of working, service orientation",
        "High willingness to travel",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, performance-related remuneration and a permanent employment contract",
      ],
    },
  },
  {
    id: 3,
    title: "App developer iOS & Android",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "The autosecure GmbH based in Münster, are a young startup in the field of intelligent and technology-based security technology. Our work focuses on active video management systems for commercial customers throughout Germany. Would you like to help shape the development and scaling of a growing startup? Would you like to work closely with our management on strategic projects and achieve our goals? Then become part of our team and help us to write our success story together!",
      location: "Muenster",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Create new apps for our customers in the field of digitization or further develop existing apps",
        "Conception, development and continuous optimization of native apps in SwiftUI & Combine (iOS)",
        "Documentation of code and workflows",
        "Implementation of UI defaults",
        "Independent testing and bug fixing",
        "Close cooperation with our marketing & sales units",
        "High commitment and willingness to perform",
      ],
      profile: [
        "An IT degree, a comparable degree or IT training",
        "Meaningful references, ideally in live operation",
        "Several years of experience in an agency, software company or startup",
        "Team player using agile methods",
        "High commitment and willingness to perform",
        "You are characterized by innovative spirit and fun in further development",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, above-average and success-oriented remuneration and a permanent employment contract",
        "Very good promotion and development opportunities",
      ],
    },
  },
  {
    id: 4,
    title: "Frontend Developer Laravel, PHP",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "The autosecure GmbH based in Münster, are a young startup in the field of intelligent and technology-based security technology. Our work focuses on active video management systems for commercial customers throughout Germany. Would you like to help shape the development and scaling of a growing startup? Would you like to work closely with our management on strategic projects and achieve our goals? Then become part of our team and help us to write our success story together",
      location: "Muenster",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Development and further development of the autosecure ecosystem",
        "Development of interfaces for customer's own ERP systems",
        "Design and implementation of Laravel applications considering maintainability, fault tolerance and scalability",
        "Converting complex, high-level requirements into concrete technical specifications and estimates to support project planning and decision-making",
        "Provide and receive constructive feedback in technical meetings and code reviews",
        "Close cooperation with our marketing and sales units",
        "Close cooperation with our product development",
        "prototyping",
      ],
      profile: [
        "In-depth knowledge and expertise with the Laravel PHP framework",
        "At least 5 years of experience writing production quality PHP code",
        "In-depth experience with and understanding of the Laravel framework is a must",
        "Up-to-date knowledge of the latest PHP and Laravel versions and the surrounding ecosystem",
        "Experience in documenting, creating and using RESTful APIs",
        "Confidence in taking on complex tasks independently and turning them into well-tested and maintainable solutions",
        "Experience with a collaborative Git workflow, such as B. 'Git Flow'",
        "Familiarity with the Linux command line",
        "Willingness to work, willingness to perform and openness",
        "Team spirit and good communication skills",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, above-average and success-oriented remuneration and a permanent employment contract",
        "Very good promotion and development opportunities",
      ],
    },
  },
  {
    id: 5,
    title: "IT support",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "autosecure GmbH is a young company headquartered in Münster in the field of intelligent security technology and innovative hardware and software solutions for the automotive trade and automotive logistics. We operate nationwide and have grown very strongly since our foundation in 2020. In order to continue this development, we would like to further strengthen our IT unit and are looking for an IT support specialist as soon as possible",
      location: "Muenster",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Our security systems are 100% intelligent networked IT systems. The regular checking of target states and the correct setting of all parameters is an elementary building block for the security of our customer systems. We are looking for you for this central task!",
      ],
      profile: [
        "Completed vocational training in the IT sector",
        "Experience in 1st level support",
        "Safe handling of Windows operating systems",
        "Good network and hardware knowledge",
        "Reliable, communicative, committed",
      ],
      offer: [
        "Exciting, nationwide projects in a highly motivated and very collegial team",
        "Personal development opportunities in a future-oriented and modern company",
        "Performance-based compensation",
        "Lots of fun and opportunities for development",
        "Immediate entry full-time/part-time",
        "Home office possible",
      ],
    },
  },
  {
    id: 6,
    title: "Junior Account Manager",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "The autosecure GmbH based in Münster, are a young startup in the field of intelligent and technology-based security technology. Our work focuses on active video management systems for commercial customers throughout Germany. Would you like to help shape the development and scaling of a growing startup? Would you like to work closely with our management on strategic projects and achieve our goals? Then become part of our team and help us to write our success story together!",
      location: "Muenster",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "Support for new customer acquisition",
        "Customer support with high commitment",
        "Care, advice and support for maximum customer experiences",
        "Preparation of project documents",
        'Responsible for our "Customer Happiness Guarantee"',
      ],
      profile: [
        "We are looking for career starters or career changers with an affinity for IT and modern technologies",
        "Willingness to work, willingness to perform and openness",
        "Willingness to travel (nationwide)",
        "Class B driving license is required",
        "Strong personality and confident demeanor",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, above-average and success-oriented remuneration and a permanent employment contract",
        "Very good promotion and development opportunities",
      ],
    },
  },

  {
    id: 7,
    title: "System engineer / IT technology in the field",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "autosecure GmbH is a specialist provider in the area of ​​security for automobile trade and logistics companies. We support our customers nationwide and deliver high-quality camera surveillance solutions based on the latest cloud and network architecture. We are looking for an experienced network and IT specialist to set up and support our customer systems as soon as possible.",
      location: "Munster / Nationwide",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "You are responsible for the commissioning, configuration and support during operation of the camera systems installed nationwide at our customers. In the event of system failures and disruptions, you ensure that the target state is restored as quickly as possible",
        "With your IT know-how and your strong problem-solving and team skills, you make a valuable contribution to the continuous improvement of our system setup.",
        "You also assume responsibility in direct customer contact and perform important interface work between the assembly team and customer support.",
      ],
      profile: [
        "You have in-depth experience in setting up and setting up network, cloud and IP-based systems, preferably in the field of video. You have an unrestricted willingness to travel throughout Germany for direct on-site support and installation of our customer systems.",
        "Preferably, you have basic training as an IT specialist for system integration or comparable and several years of professional experience in this field.",
        "Your appearance is always binding. You are a good communicator, a team player and loyal.",
      ],
      offer: [
        "Exciting and innovative products with high appeal and relevance for our target group",
        "Flat hierarchy with a strong team spirit",
        "Provision of company cars for private use",
        "Apple mobile phone, premium notebook, corporate credit card",
        "Attractive, above-average and success-oriented remuneration and a permanent employment contract",
      ],
    },
  },
  {
    id: 8,
    title: "Business Development Intern",
    jobDesc: "Permanent position / full-time",
    location: "Muenster",
    starting: "From now on",
    details: {
      desc: "The autosecure GmbH based in Münster, are a young startup in the field of intelligent and technology-based security technology. Our work focuses on active video management systems for commercial customers throughout Germany. Would you like to help shape the development and scaling of a growing startup? Would you like to work closely with our management on strategic projects and achieve our goals? Then become part of our team and help us to write our success story together!",
      location: "Munster",
      base: "Full-time from now on",
      type: "permanent employment",
      tasks: [
        "As part of your internship, you will focus on working with our management to expand our portfolio in a meaningful and sustainable way",
        "You research and develop a technology and sales concept for an innovative product expansion",
        "You prepare the marketing concept for the product innovation together with our graphics agency",
        "You help with the research of potential leads, evaluate them and thus contribute to the acquisition of new customers",
      ],
      profile: [
        "You are currently studying or have completed your studies and are looking for an exciting entry into the professional world",
        "Strong communication skills and a high degree of self-confidence",
        "Open to new and critical thinking",
        "Structured way of working",
        "High willingness to travel",
      ],
      offer: [
        "Challenging tasks in an agile, dynamic and expanding startup environment",
        " Exciting nationwide projects related to the expansion of our product portfolio",
        "An ambitious and highly motivated team with flat hierarchies",
        "The opportunity to contribute your individual strengths and your own ideas with a lot of creative freedom and to develop yourself professionally and personally",
      ],
    },
  },
];
