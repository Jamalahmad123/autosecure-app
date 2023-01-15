import {
  wireless_btn,
  wireless_center_unit,
  wireless_door_protection,
  wireless_fire_prt,
  wireless_glass_protect,
  wireless_indoor_siren,
  wireless_keypad_plus,
  wireless_motion_cam,
  wireless_protection_plus,
  wireless_radio,
  wireless_relay,
  wireless_siren,
  wireless_space_ctr,
} from "../assets/images";

export const data = {
  outDoor: {
    id: 1,
    title: "outdoor area",
    list: [
      "After the alarm has been raised, the operator in the alarm center qualifies and assesses the situation",
      `With visual and acoustic warnings, we signal the suspects on site "We're here!". To add another layer of protection, the optional two-way audio feature also allows on-site sounds to be heard`,
    ],
  },
  fencedArea: {
    title: "Fenced area / indoor area",
    list: [
      "Immediate automated audio warning and live perpetrator speech in the cordoned off area.",
      "Thanks to the high protection against false alarms, our technology makes it possible to completely dispense with manual intervention in closed-off areas. The cameras detect moments of danger and a user-defined audio message is played immediately. In this way, we do not lose any time in the manual processing of crystal-clear factual situations. (This feature is optional and contains system components that are subject to a surcharge).",
    ],
  },
  cenimaWeb: {
    title: "Cinema documentary webcam",
    list: [
      "8K cinema look",
      "Impressive time-lapse recordings",
      "Ideal for documentation",
      "Up to 12mm varifocal lens with AF",
      "180° opening angle",
    ],
  },
  smartTracking: {
    title: "360° smart tracking",
    list: [
      "Detection up to 200m",
      "Automatic perpetrator tracking (Smart Tracking)",
      "360° rotatable",
      "42x optical zoom with AF",
      "4K & infrared heater integrated",
    ],
  },
  monitoringCenter: [
    "Real-time monitoring by our state-of-the-art 24/7 security center",
    "Live perpetrator speech",
    "Notification of emergency services",
    "Management of our digital guard book and logging of detected events",
    "Active troubleshooting",
    "Permanent monitoring and constant improvement of our employees through in-house quality assurance",
  ],
};

export const aboutTower = [
  "With a mast height of up to 9 meters and a narrow stand area of ​​1.20 x 1.20 m, we offer the latest surveillance technology in the smallest of spaces for an overview from above.",
  "Mast height max. height 9 m",
  "Certified wind stability up to 110 km/h",
  "Galvanized telescopic mast (manual)",
  "Dimensions transport mode: L 1100 x W 1100 x H 2500 mm",
  "Weight. about 600kg",
  "Feed socket: 230V",
  "Intelligent analysis software (AI)",
  "Surveillance radius up to 400 m (depending on model)",
  "Location can be easily changed",
  "Battery storage continues to provide energy for up to 80 hours in the event of a power failure (depending on the model)",
  "Full service: delivery, collection, transfer - as long as you want",
];

// export const featureindivisuals = ;
export const mobileSecuritySliderData = [
  // featureindivisuals
  {
    id: 1,
    title1: "maximum",
    title2: "Individuality.",
    titleDesc:
      "Our security towers can be equipped individually based on your requirements.",
    list: [
      "Pivoting PTZ with intelligent SmartTracking function to automatically track intruders",
      "High-performance thermal cameras with a detection range of up to 400m",
      "180 degree panoramic view camera",
      "Baudoku cameras / webcams for public relations and impressive time-lapse film recordings",
      "Pressure chamber speakers with 101DB per tower for an individual audio response for emergency response",
    ],
  },
  // featureArc
  {
    id: 2,
    title1: "most modern",
    title2: "system architecture.",
    titleDesc: `Rely on safety "made in Germany".`,
    list: [
      "Cloud hosting and German data centers - also with geo-redundancy on request",
      "LiveView flat rate without data volume limitation",
      "On-site NVR (Network Video Recorder) as local storage medium with completely variable storage duration (30 / 60 / 90 days depending on customer requirements)",
      "Unlimited data upload and download via LTE for live view and use of the recording functions",
    ],
  },
  // featureDeepLearning
  {
    id: 3,
    title1: "Deep",
    title2: "Learning",
    titleDesc:
      "Intelligence in the cameras and smart algorithms with > 95% real alarm rate.",
    list: [
      "Innovative deep learning algorithm for alarm generation",
      "The magic behind it all: important events are put in the spotlight Lowest rate of false alarms on the market - maximum reduction of effort in the alarm center and basis for security services of the highest quality",
      "Accurate alert: Thanks to deep learning algorithms, the technology distinguishes people and vehicles from other moving targets",
      "False alarms caused by light reflections, small animals, dogs, cats, brands, etc. are a thing of the past in 95% of cases.",
    ],
  },
  // quality
  {
    id: 4,
    title1: "Brilliant image quality.",
    title2: "Saturated colors.",
    titleDesc:
      "Even in complete darkness. Real color rendering from as little as 0.01 lux.",
    list: [
      "What's the challenge?",
      "The darkness provides protection for theft, trespassing and other crimes.",
      "When a traditional camera with infrared illumination is used for night surveillance, people, vehicles or other important objects are blurred and fade into the background, making it difficult to see details.",
      "Color-related information is crucial for many scenarios and represents a great enrichment for data and analysis. However, conventional cameras often lose important details when only displaying black-and-white images. Our technology is our solution to this common challenge faced by many security system users.",
    ],
  },
];

// Wireless in- & out door

export const wirelessSlidesData = [
  {
    id: 1,
    titleOneRight: "Zentral",
    titleTwoRight: "einheit",
    titleOneLeft: "Funk",
    titleTwoLeft: "Repeater",
    desc1:
      "Fortgeschrittene Zentrale mit der Unterstützung der Alarmfotobestätigung.",
    desc2: "Funk Repeater zur Reichweitenverlängerung auf bis zu 2.000 Meter",
    img1: wireless_center_unit,
    img2: wireless_radio,
  },
  {
    id: 2,
    titleOneRight: "MotionCam",
    titleTwoRight: "Outdoor",
    titleOneLeft: "motionProtect",
    titleTwoLeft: "Plus",
    desc1:
      "Kabelloser, batteriebetriebener Bewegungsmelder mit visueller Alarmverifizierung und Tierimmunität. Ausgestattet mit Abdecküberwachungssystem und Sabotageerkennung.",
    desc2:
      "Funk-Bewegungsmelder mit Mikrowellensensor und Tierimmunität. Auch in Weiß erhältlich.",
    img1: wireless_motion_cam,
    img2: wireless_protection_plus,
  },
  {
    id: 3,
    titleOneRight: "doorProtect",
    titleTwoRight: "plus",
    titleOneLeft: "glass",
    titleTwoLeft: "protect",
    desc1:
      "Funk-Öffnungsmelder mit Erschütterungs- und Neigungssensor. Auch in Weiß erhältlich.",
    desc2: "Funk-Glasbruchmelder",
    img1: wireless_door_protection,
    img2: wireless_glass_protect,
  },
  {
    id: 4,
    titleOneRight: "keyPad",
    titleTwoRight: "plus",
    titleOneLeft: "",
    titleTwoLeft: "Button",
    title1Op: "space",
    title2Op: "control",
    descOp:
      "Funkfernbedienung zur Steuerung des Sicherheitssystems mit Notfallknopf",
    desc1:
      "Kabellose Touch-Tastatur mit Unterstützung von kontaktlosen Karten und Anhängern. Auch in Weiß erhältlich.",
    desc2:
      "Kabelloser Notfallknopf / Fernbedienung zur individuell konfigurierbaren Szenariensteuerung",
    img1: wireless_keypad_plus,
    img2: wireless_btn,
    imgOp: wireless_space_ctr,
  },
  {
    id: 5,
    titleOneRight: "fire",
    titleTwoRight: "Protect",
    titleOneLeft: "",
    titleTwoLeft: "relay",
    desc1: "Funk Rauch-, Wärme- und Kohlenmonoxid-Melder mit Sirene",
    desc2:
      "Funk-Niederspannungsrelais zur Fernsteuerung von Schranken, Toren, Türen etc. mit potentialfreien Kontakten",
    img1: wireless_fire_prt,
    img2: wireless_relay,
  },
  {
    id: 6,
    titleOneRight: "Street",
    titleTwoRight: "Siren",
    titleOneLeft: "Indoor",
    titleTwoLeft: "Siren",
    desc1: "Kabellose Sirene mit LED-Blitzleuchte für den Außenbereich",
    desc2: "Kabellose Sirene für den Innenbereich",
    img1: wireless_siren,
    img2: wireless_indoor_siren,
  },
];
