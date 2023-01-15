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
    title: "Freigelände",
    list: [
      "Nach Alarmierung erfolgt durch den Operator in der Alarmzentrale eine Qualifizierung und Bewertung der Situation",
      `Mit visuellen und akustischen Warnungen signalisieren wir den Verdächtigen vor Ort „Wir sind da!“. Um eine weitere Schutzebene hinzuzufügen, ermöglicht die optionale Zwei-Wege-Audio-Funktion ebenfalls, Geräusche vor Ort wahrzunehmen
      `,
    ],
  },
  fencedArea: {
    title: "Umzäunte Gelände / Innenbereich",
    list: [
      "Sofortige automatisierte Audio-Warnung und Live-Täteransprache im abgesperrten Bereich.",
      "Durch die hohe Fehlalarmsicherheit ermöglicht unsere Technologie, in abgesperrten Bereichen sogar vollständig auf manuelles Eingreifen zu verzichten. Die Kameras erkennen Gefahrenmomente und sofort wird eine benutzerdefinierte Audio-Nachricht eingespielt. Damit verlieren wir keine Zeit in der manuellen Bearbeitung von glasklaren Tatbestandssituationen. (Dieses Feature ist optional und enthält aufpreispflichtige Systemkomponenten).",
    ],
  },
  cenimaWeb: {
    title: "Cinema Doku-Webcam",
    list: [
      "8K Cinema-Look",
      "Beeindruckende Zeitraffer-Aufnahmen",
      "Ideal für Dokumentationen",
      "Bis 12mm Vario-Objektiv mit AF",
      "180° Öffnungswinkel",
    ],
  },
  smartTracking: {
    title: "360° Smart-Tracking",
    list: [
      "Erkennung bis 200m",
      "Automatische Täterverfolgung (Smart Tracking)",
      "360° schwenkbar",
      "42-fach optischer Zoom mit AF",
      "4K & Infrarotstrahler integriert",
    ],
  },
  bigThermal: {
    title: "Big Mama 4.0 (Thermal)",
    list: [
      "Erkennung bis 400m bei völliger Dunkelheit",
      "Automatische Täterverfolgung (Smart Tracking)",
      "2 Bildsensoren in einer Kamera (Optisch + Thermal)",
      "Brilliante Erkennung bei jeder Witterung",
      "Optischer Bildsensor mit 2K Auflösung",
      "12mm Brennweite mit 90° Öffnungswinkel",
    ],
  },
  licenseCamera: {
    title: "Kennzeichen-Kamera",
    list: [
      "Automatische Erkennung von Kennzeichen",
      "Integration in das autosecure Pfortenbuch",
      "Kennzeichen-Suchfunktion bis zu 12 Monate",
      "Cloudbasierter User-Zuriff",
      "Individualisierbare Pfortenbucheinträge",
    ],
  },
  monitoringCenter: [
    "Echtzeitüberwachung durch unser hochmodernes 24/7 Security-Center",
    "Live-Täteransprache",
    "Verständigung von Einsatzkräften",
    "Führung unseres digitalen Wachbuches und Protokollierung festgestellter Ereignisse",
    "Aktive Störungsbeseitigung",
    "Permanentes Monitoring und stetige Verbesserung unserer Mitarbeiter durch hauseigene Qualitätssicherung",
  ],
};

export const aboutTower = [
  "Mit einer Masthöhe von bis zu 9 Metern und einem schmalen Standbereich von 1,20 x 1,20 m, bieten wir modernste Überwachungstechnik auf kleinstem Raum für den Überblick von oben.",
  "Masthöhe max. Höhe 9 m",
  "Zertifizierte Windstabilität bis 110 km/h",
  "Verzinkter Teleskopmast (manuell)",
  "Abmessungen Transportmodus: L 1100 x B 1100 x H 2500 mm",
  "Gewicht. ca. 600kg",
  "Einspeise Steckdose: 230V",
  "Intelligente Analyse-Software (KI)",
  "Überwachungsradius bis zu 400 m (je nach Modell)",
  "Standort kann einfach verändert werden",
  "Batteriespeicher liefert bei Stromausfall weiter Energie bis 80 Std. (je nach Modell)",
  "FullService: Lieferung, Abholung, Verbringung – solange Sie möchten",
];

// export const featureindivisuals = ;
export const mobileSecuritySliderData = [
  // featureindivisuals
  {
    id: 1,
    title1: "Maximale",
    title2: "Individualität.",
    titleDesc:
      "Auf Basis Ihrer Anforderungen lassen sich unsere Security-Türme individuell bestücken.",
    list: [
      "Schwenkbare PTZ mit intelligenter SmartTracking Funktion zur automatischen Verfolgung von Eindringlingen",
      "Hochleistungs-Thermalkameras mit Erkennungsreichweite bis zu 400m",
      "180 Grad Panorama View-Kamera",
      "Baudoku-Kameras / Webcams für Öffentlichkeitsarbeit und imposante Zeitrafferfilmaufnahmen",
      "Druckkammer-Lautsprecher mit 101DB je Tower für eine individuelle Audioansprache zur Gefahrenabwehr",
    ],
  },
  // featureArc
  {
    id: 2,
    title1: "Modernste.",
    title2: "Systemarchitektur",
    titleDesc: `Verlassen Sie sich auf Sicherheit „made in Germany“.`,
    list: [
      "Cloudhosting und deutsche Rechenzentren - auf Wunsch auch mit Georedundanz",
      "LiveView Flatrate ohne Begrenzung des Datenvolumens",
      "Vor-Ort NVR (Network Video Recorder) als lokales Speichermedium mit völlig variabler Speicherdauer (30 / 60 / 90 Tage je nach Kundenwunsch)",
      "Unbegrenzter Datenup- und download via LTE für Live-View und Nutzung der Aufzeichnungsfunktionen",
    ],
  },
  // featureDeepLearning
  {
    id: 3,
    title1: "Deep",
    title2: "Learning",
    titleDesc:
      "Intelligenz in den Kameras und smarte Algorithmen mit > 95% Echtalarm-Quote.",
    list: [
      "Innovativer Deep-Learning Algorithmus für die Alarmerzeugung",
      "Die Magie hinter allem: wichtige Ereignisse werden in den Mittelpunkt gestellt",
      "Geringste Fehlalarm-Quote am Markt – maximale Reduktion des Aufwandes in der Alarmzentrale und Grundlage für Sicherheits-Dienstleistungen auf qualitativ höchstem Niveau ",
      "Präziser Alarm: Danke tiefgreifenden Lernalgorithmen unterscheidet die Technologie Personen und Fahrzeuge von anderen beweglichen Zielen",
      "Fehlalarme durch Lichtreflexionen, Kleintiere, Hunde, Katzen, Marken etc. gehören in 95% der Fälle der Vergangenheit an.",
    ],
  },
  // quality
  {
    id: 4,
    title1: "Brillante Bildqualität.",
    title2: "Satte Farben",
    titleDesc:
      "Selbst bei völliger Dunkelheit. Echte Farbwiedergabe schon bei 0,01 lux.",
    list: [
      "Was ist die Herausforderung?",
      "Die Dunkelheit bietet Schutz für Diebstahl, Hausfriedensbruch und anderen Verbrechen.",
      "Wenn eine herkömmliche Kamera mit Infrarotbeleuchtung für die Nachtüberwachung verwendet wird, sind Personen, Fahrzeuge oder andere wichtige Objekte verschwommen und blenden sich in den Hintergrund ein, so dass es schwierig ist, Details zu erkennen.",
      "Farbbezogene Informationen sind für viele Szenarien von entscheidender Bedeutung und stellen eine große Bereicherung für Daten und Analysen dar. Herkömmliche Kameras verlieren jedoch oft wichtige Details, wenn sie nur Schwarz-Weiß-Bilder wiedergeben. Unsere Technologie ist unsere Lösung für diese häufige Herausforderung, vor der viele Benutzer von Sicherheitssystemen stehen.",
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
