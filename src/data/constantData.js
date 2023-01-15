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

export const securityPages = [
  {
    id: 1,
    name: "active video surveillance",
    link: "/solutions/security-solutions/active-video-surveillance",
  },
  {
    id: 2,
    name: "mobile security tower",
    link: "/solutions/security-solutions/mobile-security",
  },
  {
    id: 3,
    name: "wireless in & Outdoor",
    link: "/solutions/security-solutions/wireless-in-and-outdoor",
  },
];

export const scanPages = [
  {
    id: 1,
    name: "autosecure scanner",
    link: "/solutions/scanner-solutions/scan",
  },
  {
    id: 2,
    name: "digital gatekeeper",
    link: "/solutions/scanner-solutions/digital-gate-keeper",
  },
];

export const locatePages = [
  {
    id: 2,
    name: "autosecure locate app",
    link: "/solutions/localization-solutions/locate-app",
  },
  {
    id: 3,
    name: "autosecure GPS tracker",
    link: "/solutions/localization-solutions/gps-tracker",
  },
];

export const solutionsDropdownLinks = {
  id: 1,
  name: "Lösungen",
  link: "/solutions",
  pages: [
    {
      id: 1,
      name: "Security-Lösungen",
      subPages: [
        {
          id: 1,
          // active video surveillance
          name: "aktive videoüberwachung",
          link: "/solutions/security-solutions/active-video-surveillance",
        },
        {
          id: 2,
          //  Mobiler Sicherheitsturm
          name: "mobile security tower",
          link: "/solutions/security-solutions/mobile-security",
        },
        {
          id: 3,
          //
          name: "wireless in & Outdoor",
          link: "/solutions/security-solutions/wireless-in-and-outdoor",
        },
      ],
    },
    {
      id: 2,
      name: "Scanner-Lösungen",
      subPages: [
        {
          id: 1,
          // autosecure scanner
          name: "autosecure scanner",
          link: "/solutions/scanner-solutions/scan",
        },
        {
          id: 2,
          // digital gatekeeper
          name: "digital gatekeeper",
          link: "/solutions/scanner-solutions/digital-gate-keeper",
        },
      ],
    },
    {
      id: 3,
      name: "Lokalisations-Lösungen",
      link: "/solutions/localization-solutions/locate",
      subPages: [
        {
          id: 2,
          name: "autosecure locate app",
          link: "/solutions/localization-solutions/locate-app",
        },
        {
          id: 3,
          name: "autosecure GPS tracker",
          link: "/solutions/localization-solutions/gps-tracker",
        },
      ],
    },
  ],
};

export const navLinks = [
  // {
  //   id: 1,
  //   name: "solutions",
  //   link: "solutions",
  //   subPages: [
  //     {
  //       id: 1,
  //       name: "security solutions",
  //       link: "solutions/security-solutions",
  //     },
  //     {
  //       id: 2,
  //       name: "scanner solutions",
  //       link: "solutions/scanner-solutions",
  //     },
  //     {
  //       id: 3,
  //       name: "localization solutions",
  //       link: "solutions/localization-solutions",
  //     },
  //   ],
  // },
  {
    id: 2,
    name: "Branchen",
    link: "industry",
    subPages: [
      {
        id: 1,
        name: "Automobil & Mobilität",
        link: "industry/automobile-mobility",
      },
      {
        id: 2,
        name: "Agrar & Landwirtschaft",
        link: "industry/agriculture-formings",
      },
      {
        id: 3,
        name: "Bau & Baufahrzeuge",
        link: "industry/construction",
      },
      {
        id: 4,
        name: "Logistik & Waren",
        link: "industry/logistics-goods",
      },
    ],
  },
  {
    id: 3,
    name: "Unternehmen",
    link: "company",
    subPages: [
      {
        id: 1,
        name: "Über uns",
        link: "company/about-us",
      },
      {
        id: 2,
        name: "News",
        link: "company/news",
      },
      {
        id: 3,
        name: "Karriere",
        link: "company/career",
      },
      {
        id: 4,
        name: "Werte",
        link: "company/values",
      },
      {
        id: 5,
        name: "Vision & Mission",
        link: "company/mission-vision",
      },
      {
        id: 6,
        name: "Kontakt",
        link: "company/contact",
      },
    ],
  },
];

export const legals = [
  {
    id: 2,
    name: "Impressum",
    link: "legal/imprint",
  },
  {
    id: 3,
    name: "Datenschutz",
    link: "legal/privacy",
  },
  {
    id: 4,
    name: "ABG",
    link: "legal/conditions",
  },
];

// industry sector solution
export const industrySector = [
  {
    id: 1,
    link: "/industry/automobile-mobility",
    name: "Automobil & Mobilität",
    desc: "Automations-Lösungen für Autohäuser, Autoparks und Fahrzeug-Vermieter.",
    benefit1: "50% weniger Security-Kosten",
    benefit2: "20% schnellere Prozesse",
    image: autosecureVehicle,
  },
  {
    id: 2,
    link: "/industry/construction",
    name: "Bau & Baufahrzeuge",
    desc: "Automations-Lösungen für die Baustelle der Zukunft.",
    benefit1: "50% weniger Security-Kosten",
    benefit2: "20% schnellere Prozesse",
    image: autosecureConstruction,
  },
  {
    id: 3,
    link: "/industry/agriculture-formings",
    name: "Agrar & Landwirtschaft",
    desc: "Technologiebasierte Lösungen für den Landwirt von morgen.",
    benefit1: "Digitale Ein- und Ausfahrtkontrolle",
    benefit2: "Digitale Freigabe von Ein- & Ausfahrtberechtigungen",
    image: autosecureFarming,
  },
  {
    id: 4,
    link: "/industry/logistics-goods",
    name: "Logistik & Waren",
    desc: "Automations-Lösungen für Logistik-Prozesse und Waren-Tracking.",
    benefit1: "50% weniger Security-Kosten",
    benefit2: "20% schnellere Prozesse",
    image: autosecureLogistic,
  },
];

export const features = [
  {
    id: 1,
    link: "/solutions/security-solutions/active-video-surveillance",
    title: "secure",
    desc: "Aktive Videoüberwachung mit Live-Täteransprache nach dem SAVE-Prinzip.",
    benefit1: "50% weniger Security-Kosten",
    benefit2: "100% weniger Schadensfälle",
    btnTitle: "Security-Lösungen",
    videoPath: autoSecurityVideo,
    subPages: securityPages,
  },
  {
    id: 2,
    link: "/solutions/scanner-solutions/scan",
    title: "scan",
    desc: "Digitale Zustandskontrolle, Schadenerkennung und Dokumentation in Echtzeit.",
    benefit1: "100% Zustandserfassung aller Fahrzeuge",
    benefit2: "Keine Diskussionen mit Kunden",
    btnTitle: "Scanner-Lösungen",
    videoPath: autoScanVideo,
    subPages: scanPages,
  },

  {
    id: 3,
    link: "/solutions/localization-solutions/locate",
    title: "locate",
    desc: "Präzise Echtzeit In- und Outdoor Lokalisation von Waren oder Fahrzeugen.",
    benefit1: "20% schnellere Prozesse",
    benefit2: "Mehr Umsatz zu weniger Kosten",
    btnTitle: "locate-Lösungen",
    videoPath: autoLocateVideo,
    subPages: locatePages,
  },
];

export const solutionsLogistics = [
  {
    id: 1,
    title: "Automatisierte Ein- und Ausfahrt-Kontrolle.",
    desc: "Automatisierte Trailer und Gefahrgut-Erkennung, Frachtprüfung zur Reduktion von manuellen Abfertigungs- und Such-Aufwand werden in der Logistik heutzutage oftmals noch manuell, mit einer hohen Fehlerquote und immensem Personalaufwand ausgeführt. Die neue autosecure Scan-Lösung vereinfacht, digitalisiert und automatisiert diese Routine-Aufgaben.",
    btnTitle: "security-Lösungen",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
    subPages: securityPages,
  },
  {
    id: 2,
    title: "Waren und Güter mit automatischem Buchungsvorgang.",
    desc: "Manuelle und personalintensive Routine-Aufgaben wie das Verbuchen von Waren und Gütern, werden nach wie vor in vielen Betrieben mit hohen Personal-Ressourcen und hoher Fehlerquote betrieben. Die neue autosecure Locate-Lösung automatisiert diese Vorgänge und sorgt für mindestens 20% schnellere Prozess-Abwicklung.",
    btnTitle: "Scanner-Lösungen",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
    subPages: scanPages,
  },
  {
    id: 3,
    title: "Diebstahl- und Einbruchs-Problematik auf dem Betriebsgelände.",
    desc: "Maschinen und Warendiebstahl ist bei Logistikern ein großes Problem. Permanente Entwendungen begegnen beinahe jedem Unternehmen. autosecure bietet sinnvolle und intelligente Sicherheitslösungen und stellt 100% Schutz für Ihre Werte sicher. Übrigens erreichen Sie mit autosecure mind. 50% Ersparnis gegenüber personalbasierter Überwachung.",
    btnTitle: "Locate-Lösungen",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
    subPages: locatePages,
  },
];

export const solutionsConstructions = [
  {
    id: 1,
    title: "Diebstahl- und Einbruchs-Problematik auf der Baustelle.",
    desc: "Maschinen- oder Wertstoff-Diebstahl auf Baustellen sind für Bauunternehmen ein großes Problem. Nicht nur der damit verbundene Wertverlust, gerade auch die daraus folgenden Ausfallzeiten führen zu erheblichen wirtschaftlichen Schwierigkeiten. autosecure bietet sinnvolle und intelligente Sicherheitslösungen und stellt 100% Schutz für Ihre Werte sicher.",
    btnTitle: "security-Lösungen",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
    subPages: securityPages,
  },
  {
    id: 2,
    title:
      "Automatiserte Dokumentation von Anliefer- und Abfuhrprozessen auf der Baustelle.",
    desc: "Welche berechtigten oder unberechtigten Personen betreten zu welchem Zeitpunkt die Baustelle? Auf vielen Baustellen führt dieses Thema zu zahlreichen Diskussionen, Versicherungs-Problematiken, Anwesenheits- und Zeiterfassungs-Problemen und vieles mehr. Die autosecure Scan-Lösung bietet ideale Möglichkeiten für automatisierte Zutrittskontrolle.",
    btnTitle: "Scanner-Lösungen",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
    subPages: scanPages,
  },
  {
    id: 3,
    title:
      "Waren und Baustoffe verlassen unbemerkt die Baustelle oder können einfach nicht wieder gefunden werden.",
    desc: "Es kostet nicht nur Zeit und Nerven – sondern am Ende des Tages auch bares Geld. Hohe Suchzeiten für das Auffinden von Waren und Baustoffen, die unbemerkt oder ungewollt die Baustelle verlassen haben oder einfach nicht mehr gefunden werden können. Mit der neuen autosecure-Locate Lösung lassen sich Waren und Baustoffe bis auf wenige Meter genau lokalisieren und ganz nebenbei noch perfekt vor Diebstahl schützen.",
    btnTitle: "Locate-Lösungen",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
    subPages: locatePages,
  },
];

export const solutionsAutoMobile = [
  {
    id: 1,
    title: "Diebstahl- und Einbruchs-Problematik auf dem Betriebsgelände.",
    desc: "Kfz-Diebstahl ist für Autohäuser, Auto-Parks und Fahrzeug-Vermieter ein großes Problem. Permanente Teil- und Totalentwendungen begegnen beinahe jedem Unternehmen. autosecure bietet sinnvolle und intelligente Sicherheitslösungen und stellt 100% Schutz für Ihre Werte sicher.",
    btnTitle: "Security-Lösungen",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
    subPages: securityPages,
  },
  {
    id: 2,
    title:
      "Automatisierte Zustandsdokumentation von Fahrzeugen auf dem Gelände.",
    desc: "Diskussion mit Kunden, in welchem Zustand sich das Fahrzeug zu welchem Zeitpunkt befand oder die schnelle Erkennung von Schäden am Fahrzeug bei der Zustandsbewertung. Diese Problematiken löst der neue autosecure-Scanner und erfasst jedes Fahrzeug automatisiert auf dem Betriebsgelände.",
    btnTitle: "Scanner-Lösungen",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
    subPages: scanPages,
  },
  {
    id: 3,
    title: "Hohe Suchzeiten für das Auffinden von Fahrzeugen auf dem Gelände.",
    desc: "Es kostet nicht nur Zeit und Nerven – sondern am Ende des Tages auch bares Geld. Hohe Suchzeiten für das Auffinden von Fahrzeugen auf dem Betriebsgelände sind ein zeitintensives Problem für viele Autohäuser, Auto-Parks und Fahrzeugvermieter. Mit der neuen autosecure-Locate Lösung lassen sich Ihre Fahrzeuge bis auf wenige Meter genau lokalisieren.",
    btnTitle: "Locate-Lösungen",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
    subPages: locatePages,
  },
];

export const solutionsAgriculture = [
  {
    id: 1,
    title: "Diebstahl- und Einbruchs-Problematik auf dem Betriebsgelände.",
    desc: "Maschinen und Warendiebstahl in der Landwirtschaft ist ein großes Problem. Permanente Entwendungen begegnen beinahe jedem Agrar-Betrieb. autosecure bietet sinnvolle und intelligente Sicherheitslösungen und stellt 100% Schutz für Ihre Werte sicher. Übrigens erreichen Sie mit autosecure mind. 50% Ersparnis gegenüber personalbasierter Überwachung.",
    btnTitle: "security-Lösungen",
    path: "/solutions/security-solutions",
    videoPath: autoSecurityVideo,
    subPages: securityPages,
  },
  {
    id: 2,
    title: "Automatisierte Ein- und Ausgangs-Kontrolle.",
    desc: "Automatisierte Ernte- und Frucht-Prüfung (Form, Farbe, Größe)  ist in vielen Agrar-Betrieben noch Zukunftsmusik. Oft werden eine Vielzahl von Mitarbeitern mit diesen Aufgaben betraut. Die neue autosecure Scan-Lösung und modernste Machine-Vision Technologie sorgen für einen automatisierten und sicheren Ablauf Ihrer Ernte-Prüfung.",
    btnTitle: "Scanner-Lösungen",
    path: "/solutions/scanner-solutions",
    videoPath: autoScanVideo,
    subPages: scanPages,
  },
  {
    id: 3,
    title:
      "Waren und Güter verlassen unbemerkt die Liegenschaft oder können einfach nicht wieder gefunden werden.",
    desc: "Es kostet nicht nur Zeit und Nerven – sondern am Ende des Tages auch bares Geld. Hohe Suchzeiten für das Auffinden von Waren und Gütern, die unbemerkt oder ungewollt die Liegenschaft verlassen haben oder einfach nicht mehr gefunden werden können. Mit der neuen autosecure Locate-Lösung lassen sich Waren und Güter bis auf wenige Meter genau lokalisieren und ganz nebenbei noch perfekt vor Diebstahl schützen.",
    btnTitle: "Locate-Lösungen",
    path: "/solutions/localization-solutions",
    videoPath: autoLocateVideo,
    subPages: locatePages,
  },
];

export const acheivements = [
  {
    id: "autosecure-goes-Automechanika-2022",
    title: "autosecure goes Automechanika 2022",
    image: autosecureAutomechanika,
    details: {
      id: 1,
      date: "Munster, September 8, 2022",
      desc: "Secure. Scan. Locate. Der Automations-Spezialist autosecure wird auf der automechanika Frankfurt 2022 im Rahmen der Zukunftswerkstatt 4.0 seinen neuen Auto-Scanner präsentieren. Besuchen Sie uns in Halle 9.0, Stand E62.",
      html: `
        <p>
        Der Auto-Scanner von autosecure bietet Ihnen digitale Zustandskontrolle, Schadenerkennung und Dokumentation in Echtzeit. Erfassen Sie 100% aller Fahrzeuge die Ihr Betriebsgelände befahren oder verlassen. Dokumentieren Sie automatisiert und in Echtzeit den Zustand jedes einzelnen Fahrzeuges. Somit stellen Sie sicher, jederzeit nachweisen zu können, wann sich welches Fahrzeug in welchem Zustand befand.<br /><br />
        Besonders interessant ist der Auto-Scanner für Autohäuser, Autoparks und Fahrzeugsvermieter, die immer wieder Diskussionen mit ihren Kunden führen, wer einen Schaden am Fahrzeug verursacht hat und oft auf Kosten für Reparaturen sitzen bleiben. Mit dem Auto-Scanner von autosecure gehören diese Probleme der Vergangenheit an – denn Sie können jederzeit zweifelsfrei nachweisen, in welchem Zustand sich das Fahrzeug befand.</p>
        <p><b>All features of our car scanner at a glance:</b></p>
        <ul>
          <li>Digitale und lückenlose Fahrzeugzustandskontrolle bei Grundstückszufahrt, Direktannahme oder an einem frei wählbaren Ort auf dem Gelände.</li>
          <li>Digitale Fahrzeugbegutachtung in Echtzeit für optische Zustandsbewertungen und Wertminderungsgutachten.</li>
          <li>Reduktion von manuellen Begutachtungskosten.</li>
          <li>Nahtlose Integration der autosecure Lösungen in hauseigene IT-Infrastruktur (ERP modeling).</li>
          <li>Sinnvolle Weiterverwendung der Aufnahmen für z.B. interne Prozesstransparenz oder als Unterstützung für den erforderlichen Begutachtungsprozess durch Prüfdienstleister.</li>
          <li>Automatische Zuordnung des Fahrzeuges durch Kennzeichenerfassung oder digitale Verortung in Kombination mit autosecure-Locate.</li>
          <li>Erhöhung der Durchlaufgeschwindigkeit.</li>
        </ul>
        <p>Besuchen Sie unseren autosecure Messestand in Halle 9.0, Stand E62. Wir freuen uns auf Ihren Besuch und demonstrieren Ihnen gerne, wie Sie mit unserem Auto-Scanner künftig viele Probleme lösen, Kosten einsparen und Vorgänge automatisiert.<br /><br />
        Weitere Informationen zu unserem Auto-Scanner für Sie auf unserer Website unter <a href="/solutions/scanner-solutions/scan"><b>scan.autosecure.net</b></a>
        </p> 
      `,
    },
  },
  {
    id: "autosecure-eco-system-offiziell-gestarted",
    title: "autosecure Eco-System offiziell gestartet",
    image: autosecureNewsEcosystem,
    details: {
      date: "Munster, April 11, 2022",
      desc: "Die Digitalisierung Ihrer Standortsicherheit geht mit autosecure wieder auf ein neues Level. Wir freuen uns Ihnen mitteilen zu können, dass wir vor einigen Tagen unser neues autosecure Eco-System offiziell gestartet haben.",
      html: `
        <p>Das autosecure Ecosystem ist unsere neue Highend-Webplattform für die Integration aller unserer Services:</p><br />
        <ul>
          <li>Web-Plattform für die maximale Vereinfachung von Geschäftsabläufen</li>
          <li>Cloudbasierter User-Account</li>
          <li>Erhebliche Reduktion von E-Mail Korrespondenz, Telefonaten oder Suchaufwand</li>
          <li>Zentralisierte Bereitstellung von Informationen und Dokumentationen</li>
          <li>Maximale Transparenz für Ereignisse</li>
        </ul><br />
        <p>
        Hier gelangen Sie zum Portal<br />
        <a href="https://app.autosecure.net">https://app.autosecure.net</a> <br /> <br />
        In einer separaten E-Mail erhalten Sie noch heute Ihre Zugangsdaten.<br /> <br />
        Mit dem autosecure Eco-System wird die Kommunikation zwischen Ihnen und unseren Kolleg*innen in der Leitstelle auf ein neues digitales Niveau gehoben. Festgestellte Ereignisse an Ihrem Objekt werden künftig direkt im Eco-System erfasst und in einer gesammelten Übersicht in Echtzeit zur Verfügung gestellt. Weiterhin erhalten Sie künftig immer automatisch morgens um 08.00 Uhr eine E Mail mit allen festgestellten Ereignissen der letzten 24 Stunden an Ihrem Objekt. Natürlich können Sie die E-Mail Benachrichtigung in den Einstellungen auch wieder deaktivieren.<br /> <br />
        
        Sie möchten Anmeldungen für Fahrzeugabholungen oder besondere Hinweise für uns hinterlegen? Nutzen Sie die Funktion „Objektvermerke“ und hinterlassen Sie uns damit unproblematisch Nachrichten.<br /> <br />
        
        Im autosecure Eco-System hinterlegen wir zu Ihrem Objekt standardmäßig alle verfügbaren Dokumente wie Kamerapläne, abgestimmte Alarmpläne und Objektinformationen. Außerdem finden Sie hier unsere vereinbarten Zeitpläne und sonstige Objektbemerkungen. Damit haben wir alle relevanten Informationen an einem Ort und wir sparen uns beiderseitig viel Zeit und Nerven.<br /> <br />
        Sie haben Fragen zum Eco-System oder möchten gerne eine individuelle Einarbeitung in das System? Wir stehen Ihnen jederzeit gern zur Verfügung!
        </p>
      `,
    },
  },

  {
    id: "hipe-award-fuer-autosecure",
    title: "HIPE Award für autosecure",
    image: autosecureHipeAward,
    details: {
      date: "Munster, April 4, 2022",
      desc: "Das Unternehmen autosecure erhält HIPE Award 2022 Auszeichnung – klare Empfehlung unserer Dienstleistung mit der Gesamtnote 1,7.",
      html: `
        <p>Der HIPE Award steht für eine klare Empfehlung der Dienstleistung eines ausgezeichneten Unternehmens. Mehr qualitative Sicherheit und überragende Dienstleistung zeichnen die Unternehmen aus, die für den HIPE Award nominiert und ausgezeichnet werden. Mit der Gesamtnote 1,7 erhält autosecure einer der begehrtesten Auszeichnungen für Unternehmen im deutschsprachigen Raum.</p>

        <p>“Wir freuen uns sehr über diese Auszeichnung – dies zeigt die gute Entwicklung unseres Unternehmen und unseres Teams. Als hochwertiger Dienstleister für Secure-, Scan- und Locate-Lösungen ist dies ein weiterer Beweis dafür, dass unser Service stimmt.” erklärt autosecure Geschäftsführer Stefan Chüo.</p>
        
        <p>Die autosecure GmbH aus Münster ist spezialisiert auf führende technologiebasierte Automations-Lösungen für die Automobil- und Mobilitätsindustrie und bietet neben <a href="/solutions/security-solutions/active-video-surveillance">Sicherheits-Technologien</a> auch <a href="/solutions/scanner-solutions/scan">Auto-Scanner-Lösungen</a> für die digitale Zustandskontrolle, Schadenserkennung und Dokumentation in Echtzeit, sowie <a href="#">Locate-Lösungen</a> für die präzise Lokalisierung von Waren oder Fahrzeugen im In- und Outdoor-Bereich.</p> <br />
        <img src="/autosecure_hipe_award_2.jpg" />
      `,
    },
  },
  {
    id: "sicherung-des-grossbetriebes-sueverkruep-in-muenster",
    title: "Sicherung des Großbetriebes Süverkrüp in Neumünster.",
    image: autosecureneumuenster,
    details: {
      date: "Munster, November 13, 2021",
      desc: "Familienunternehmen denken in Generationen, nicht in Geschäftsjahren. Mit den zukunftsweisenden Sicherheitslösungen von autosecure entscheidet sich die Autohaus-Gruppe Süverkrüp aus Schleswig Holstein für die nächste Generation von technologiebasierter und vollautomatisierter Sicherheit zur Standort-Absicherung.",
      html: `
        <p>„Das Familienunternehmen Süverkrüp mit seiner 111-jährigen Historie, seinen 17 Standorten in ganz Deutschland und seinen 9 Automarken, stand bei autosecure immer ganz oben auf unserer Wunschkundenliste. Umso mehr freuen wir uns, für diese traditionsreiche Autohaus-Gruppe den Standort Neumünster mit unseren zukunftsweisenden und automatisierten<a href="/solutions/security-solutions/active-video-surveillance">Sicherheitstechnologien</a>. abzusichern und der Süverkrüp-Unternehmerfamilie zu helfen, beim Thema Sicherheit keine Kompromisse mehr eingehen zu müssen“. zeigt sich Stefan Chüo, Geschäftsführer der autosecure GmbH erfreut.</p>

        <p>Überzeugen konnte vor allem der <a href="/solutions/security-solutions/active-video-surveillance">ganzheitliche Sicherheitsansatz von autosecure.</a> Mit Unterstützung von künstlicher Intelligenz, Machine Learning Technologie und Einsatz von modernsten Highend-Kameras auf der einen Seite – und einem <a href="/solutions/security-solutions/active-video-surveillance">360° Sicherheitskonzept mit Live-Täteransprache</a> ,eigenem 24/7 Security-Center mit aktiver Störungsbeseitigung, dem eigens entwickelten autosecure SAVE-Prinzip und das tiefgreifende Sicherheits-Know-How des autosecure-Teams auf der anderen Seiten – bilden die perfekte Symbiose für 100% weniger Schadensfälle und bis zu 50% Kosteneinsparung im Sicherheitsbereich.</p>

        <p>Neben den genannten Mehrwerten für den Süverkrüp Standort in Neumünster, gab es weitere Faktoren, mit denen autosecure als neuer Sicherheits-Partner überzeugen konnte. Durch ausbleibende Diebstahl- und Schadensereignisse und der 100%-Sicherheitsgarantie von autosecure, lassen sich mittelfristig nicht nur Kosten für Versicherungsbeiträge einsparen, sondern auch Zeit- und Rechercheaufwand für zu klärende Ereignisse auf dem Betriebsgelände erheblich reduzieren. Eine Hardware-Garantie von bis zu 5 Jahren trägt zur Investitionssicherheit bei – und die smarten Finanzierungs- und Leasingmodelle von autosecure schonen die Liquidität auf Kundenseite.</p>
      
        <p>Die autosecure GmbH aus Münster ist spezialisiert auf führende technologiebasierte Automations-Lösungen für die Automobil- und Mobilitätsindustrie und bietet neben <a href="/solutions/security-solutions/active-video-surveillance">Sicherheits-Technologien</a>auch <a href="/solutions/scanner-solutions/scan">Auto-Scanner-Lösungen</a> für die digitale Zustandskontrolle, Schadenserkennung und Dokumentation in Echtzeit, sowie <a href="#">Locate-Lösungen</a> für die präzise Lokalisierung von Waren oder Fahrzeugen im In- und Outdoor-Bereich.</p>
      `,
    },
  },
  {
    id: "autosecure-wird-technologie-partner-der-zukunftswerkstatt-4-0",
    title: "autosecure wird Technologie-Partner der Zukunftswerkstatt 4.0",
    image: autosecurePartnerZukunftswerkstatt,
    details: {
      date: "Munster, November 10, 2021",
      desc: `Unter dem Vorsitz von Wirtschafts- und Arbeitsministerin Dr. Nicole Hoffmeister-Kraut hat der Lenkungskreis des „Transformationsrats Automobilwirtschaft“ in Baden-Württemberg die „Zukunftswerkstatt 4.0“ für die Kfz-Branche auf den Weg gebracht. Unternehmen des Kfz-Gewerbes sollen sich frühzeitig auf den technologischen Transformationsprozess vorbereiten, um die Beschäftigung der Branche auch künftig abzusichern.

      Als Spezialist für smarte und zukunftsweisende Lösungen in den Bereichen Security, Scan und Locate für die Automobil- und Mobilitätsindustrie ist das Technologie-Unternehmen autosecure künftig als Technologie-Partner der Zukunftswerkstatt 4.0 mit an Board.`,
      html: `
        <p>Die Zukunftswerkstatt 4.0 in Esslingen bei Stuttgart nimmt die Rolle eines „Innovationsschaufensters“ ein, mit dessen Hilfe neue Technologien und Systeme entlang der Customer-Journey im Sales und After-Sales erprobt werden. Konzeptionell stellt die Zukunftswerkstatt 4.0 einen realen Ort dar, an dem die tatsächlichen Strukturen und Prozesse eines Autohausunternehmens realitätsgetreu und praxistauglich abgebildet werden.</p>
        
        <p>„Als Technologie-Unternehmen und Spezialist für die Automobil- und Mobilitätsindustrie war es für autosecure naheliegend eine Partnerschaft mit der Zukunftswerkstatt 4.0 anzustreben. Wir freuen uns, unsere smarten <a href="/solutions/security-solutions/active-video-surveillance">Security</a>,<a href="/solutions/scanner-solutions">Scan</a>- und <a href="#">Locate-Lösungen</a> im Showroom der Zukunftswerkstatt 4.0 vorzustellen und Interessenten von unseren zukunftsweisenden Produkten und deren Mehrwerte für Autohäuser, Autoparks oder Fahrzeug-Vermieter im Rahmen des „Innovationsschaufensters“ zu demonstrieren.“ erklärt Stefan Chüo, Geschäftsführer von autosecure, die neue Partnerschaft.</p>

        <p>Die autosecure GmbH aus Münster ist spezialisiert auf führende technologiebasierte Automations-Lösungen für die Automobil- und Mobilitätsindustrie und bietet neben <a href="/solutions/security-solutions/active-video-surveillance">Sicherheits-Technologien</a> auch <a href="/solutions/scanner-solutions/scan">Auto-Scanner-Lösungen</a> für die digitale Zustandskontrolle, Schadenserkennung und Dokumentation in Echtzeit, sowie <a href="#">Locate-Lösungen</a> für die präzise Lokalisierung von Waren oder Fahrzeugen im In- und Outdoor-Bereich.</p>
      `,
    },
  },
  {
    id: "HikVision-outstanding-performance-award-für-autosecure",
    title: "HikVision Outstanding Performance Award für autosecure",
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
  title1: "Eco-System",
  title2: "Expertise",
  desc1: [
    "Highend Web-Plattform zur Integration aller autosecure Services",
    "Software für die maximale Vereinfachung von Geschäftsabläufen",
    "Cloudbasierter User-Account",
    "Erhebliche Reduktion von E-Mail Korrespondenz, Telefonaten oder Suchaufwand",
    "Zentralisierte Bereitstellung von Informationen und Fahrzeug-Dokumentationen",
    "Maximale Transparenz und Vereinfachung von Fahrzeug-Suchprozessen",
  ],
  desc2: [
    "10+ Jahre Know-How",
    "Führend in der Entwicklung von Software und zukunftsweisenden Technologien",
    "Hochqualifiziertes Personal",
    "Regelmäßige Schulungen und Weiterbildungen",
    "24/7 Monitoring- & Service-Leitstelle",
    "Modernste Videotechnik & IoT",
    "Schnittstellen für kundeneigene ERP-Systeme",
    "Spezialisiert auf Leasing- und Finanzierungsmodelle sowie Versicherungsschutz",
    "Datenschutzrechtliche Sicherheit",
    "Zertifizierter HIKVISION Platinum Partner",
    "Zulassung als Sicherheitsunternehmen nach § 34a GewO",
  ],
};

export const savingsAndExpertise = {
  id: 1,
  title1: "Einsparpotentiale",
  title2: "Expertise",
  desc1: [
    "Mindestens 50% Reduktion von Security-Kosten gegenüber personalbasierten Überwachungslösungen.",
    "20% schnellere Fahrzeug- und Kundenprozesse.",
    "Investitionssicherheit aufgrund von modernster und zukunftsweisender Technologie-Lösungen",
    "Mittelfristige Reduktion von Versicherungsbeiträgen durch ausbleibende Diebstahl- und Schadensereignisse",
    "Erhebliche Einsparungen von Zeit- und Rechercheaufwand für zu klärende Ereignisse auf dem Betriebsgelände",
    "Bis zu 5 Jahre Garantie auf die eingesetzte Hardware",
  ],

  desc2: [
    "10+ Jahre Know-How",
    "Führend in der Entwicklung von Software und zukunftsweisenden Technologien",
    "Hochqualifiziertes Personal",
    "Regelmäßige Schulungen und Weiterbildungen",
    "24/7 Monitoring- & Service-Leitstelle",
    "Modernste Videotechnik & IoT",
    "Schnittstellen für kundeneigene ERP-Systeme",
    "Spezialisiert auf Leasing- und Finanzierungsmodelle sowie Versicherungsschutz",
    "Datenschutzrechtliche Sicherheit",
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
  title1: "System-Übernahme.",
  titleOneDesc:
    "Nahtlose Integration Ihres bestehenden Kamera-Systems in das autosecure Ecosystem.",
  title2: "Modernste Systemarchitektur.",
  titleTwoDesc: "Sicherheit made in Germany.",
  desc1: [
    "Upgrade Ihrer bestehenden Kamera-Intelligenz durch autosecure KI-Technologie.",
    "Kostenfreie Übernahme und Integration bestehender Kamera-Infrastruktur.",
    "Optimierung oder Lückenschließung Ihres aktuellen Kamera-Systems.",
  ],
  desc2: [
    "Cloudhosting und deutsche Rechenzentren – auf Wunsch auch mit Georedundanz.",
    "Vor-Ort NVR (Network Video Recorder) als lokales Speichermedium mit völlig variabler Speicherdauer (30 / 60 / 90 Tage je nach Kundenwunsch).",
    "Duale Übertragungswege (DSL, LTE).",
  ],
};

export const deepLearningAndQualityImgs = {
  id: 1,
  title1: "Deep Learning.",
  titleOneDesc: "Intelligenz in den Kameras.",
  feature1: "> 95% Echtalarm-Quote",
  title2: "Brillante Bildqualität. Satte Farben.",
  titleTwoDesc: "Selbst bei völliger Dunkelheit.",
  feature2: "> Echte Farbwiedergabe schon bei 0,01 lux.",
  desc1: [
    "Innovativer DeepLearning-Algorithmus für die Alarmerzeugung.",
    "Die Magie hinter allem: wichtige Ereignisse werden in den Mittelpunkt gestellt.",
    "Wie der Name schon andeutet, bietet die verwendete Technik die geringste Fehlalarmquote. Das reduziert den Aufwand in der Alarmzentrale und bildet die Grundlage für Sicherheits-Dienstleistung auf qualitativ höchstem Niveau.",
    "Präziser Alarm: Dank tiefgreifender Lernalgorithmen unterscheidet die Technologie Personen und Fahrzeuge von anderen beweglichen Zielen.",
    "Fehlalarme durch Lichtreflexionen, Kleintiere, Hunde, Katzen, Marder etc. gehören in 95 % der Fälle der Vergangenheit an.",
  ],
  desc2: [
    "Was ist die Herausforderung?",
    "Die Dunkelheit bietet Schutz für Diebstahl, Hausfriedensbruch und anderen Verbrechen.",
    "Wenn eine herkömmliche Kamera mit Infrarotbeleuchtung für die Nachtüberwachung verwendet wird, sind Personen, Fahrzeuge oder andere wichtige Objekte verschwommen und blenden sich in den Hintergrund ein, so dass es schwierig ist, Details zu erkennen.",
    "Farbbezogene Informationen sind für viele Szenarien von entscheidender Bedeutung und stellen eine große Bereicherung für Daten und Analysen dar. Herkömmliche Kameras verlieren jedoch oft wichtige Details, wenn sie nur Schwarz-Weiß-Bilder wiedergeben. Unsere Technologie ist unsere Lösung für diese häufige Herausforderung, vor der viele Benutzer von Sicherheitssystemen stehen.",
  ],
};

export const packages = [
  {
    id: 1,
    title: "Finanzierung",
    benefits: [
      "Flexible Leasingoptionen oder Kauf",
      "Kostenfreie, zugeschnittene Investitionsberatung durch Finanzierungspartner",
    ],
  },
  {
    id: 2,
    title: "Produkte",
    benefits: [
      "Trendbewusstsein in der Hard- und Software-Entwicklung",
      "Nachhaltig konstante Produkt-Verfügbarkeit",
    ],
  },
  {
    id: 3,
    title: "Installation nach VDE 0100",
    benefits: [
      "Höchste Ausführungsqualität durch jahrzehntelange Erfahrung mit Kameraüberwachungs- und ELA-Anlagen",
    ],
  },
  {
    id: 4,
    title: "Service",
    benefits: [
      "Proaktive Störungsbeseitigung und Serviceversprechen",
      "Individuelle Service-Pakete, zuverlässige Routineüberprüfungen = optimalen Ausfallverhütung und Langlebigkeit",
    ],
  },
  {
    id: 5,
    title: "Security-Center",
    benefits: [
      "Betriebs- und Alarmüberwachung durch Notruf- und Serviceleitstelle 24/7",
      "Zertifizierung nach VdS 2172 : 2005-12",
    ],
  },
  {
    id: 6,
    title: "Versicherung",
    benefits: [
      "Sicherheit nur mit Versicherung",
      "Option auf ein abgestimmtes Versicherungsangebot mit Berücksichtigung Ihrer Investition in die Sicherheit",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    title: "Area Sales Manager Nord",
    type: "Festanstellung / Vollzeit",
    location: "Deutschland-Nord",
    starting: "Ab sofort",
    details: {
      desc: "Die autosecure GmbH ist ein junges Unternehmen mit Hauptsitz in Münster im Bereich intelligenter Sicherheitstechnik und innovativer Hard- und Softwarelösungen für den Automobilhandel und die Automobillogistik. Wir agieren bundesweit und sind seit unserer Gründung im Jahr 2020 sehr stark gewachsen. Um diese Entwicklung weiter fortzusetzen möchten wir unseren Vertrieb weiter stärken und suchen zum nächstmöglichen Zeitpunkt einen Area Sales Manager für den Bereich Deutschland-Nord.",
      location:
        "Köln, Dortmund, Kassel, Bielefeld, Hannover, Magdeburg, Leipzig, Dresden, Berlin, Hamburg, Kiel",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",
      tasks: [
        "Akquisition von Neukunden und kontinuierliche Marktbearbeitung im vereinbarten Vertriebsgebiet",
        "Kompetente und umfassende Beratung von Interessenten sowie Pflege eines aktiven Beziehungsmanagements im Bestand",
        "Professionelle Angebots- und Vertragserstellung, Umsetzung von Angebotspräsentationen und zielführenden Vertragsverhandlungen",
        "Unterstützung und Teilnahme an Fachtagungen/Kongressen und Messen",
      ],
      profile: [
        "Langjährige und umfassende Berufserfahrung im Vertriebsaußendienst mit hoher Affinität für Digitalisierung und innovative Technologien bevorzugt. Aber auch Quereinsteiger und Junior Account Manager sind für uns interessant.",
        "Kommunikationsstärke, hohes Sendungsbewusstsein",
        "Vertriebsstärke, Empathie und Verhandlungsfähigkeit",
        "Strukturierte Arbeitsweise, Serviceorientierung",
        "Hohe Reisebereitschaft",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
      ],
    },
  },
  {
    id: 2,
    title: "Area Sales Manager Süd",
    type: "Festanstellung / Vollzeit",
    location: "Deutschland-Süd",
    starting: "Ab sofort",
    details: {
      desc: "Die autosecure GmbH ist ein junges Unternehmen mit Hauptsitz in Münster im Bereich intelligenter Sicherheitstechnik und innovativer Hard- und Softwarelösungen für den Automobilhandel und die Automobillogistik. Wir agieren bundesweit und sind seit unserer Gründung im Jahr 2020 sehr stark gewachsen. Um diese Entwicklung weiter fortzusetzen möchten wir unseren Vertrieb weiter stärken und suchen zum nächstmöglichen Zeitpunkt einen Area Sales Manager für den Bereich Deutschland-Süd.",
      location:
        "Frankfurt am Main, Saarbrücken, Karsruhe, Stuttgart, München, Passau, Nürnberg, Hof",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",
      tasks: [
        "Akquisition von Neukunden und kontinuierliche Marktbearbeitung im vereinbarten Vertriebsgebiet",
        "Kompetente und umfassende Beratung von Interessenten sowie Pflege eines aktiven Beziehungsmanagements im Bestand",
        "Professionelle Angebots- und Vertragserstellung, Umsetzung von Angebotspräsentationen und zielführenden Vertragsverhandlungen",
        "Unterstützung und Teilnahme an Fachtagungen/Kongressen und Messen",
      ],
      profile: [
        "Langjährige und umfassende Berufserfahrung im Vertriebsaußendienst mit hoher Affinität für Digitalisierung und innovative Technologien bevorzugt. Aber auch Quereinsteiger und Junior Account Manager sind für uns interessant.",
        "Kommunikationsstärke, hohes Sendungsbewusstsein",
        "Vertriebsstärke, Empathie und Verhandlungsfähigkeit",
        "Strukturierte Arbeitsweise, Serviceorientierung",
        "Hohe Reisebereitschaft",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
      ],
    },
  },
  {
    id: 3,
    title: "App-Entwickler iOS & Android",
    type: "Festanstellung / Vollzeit",
    location: "Münster",
    starting: "Ab Sofort",
    details: {
      desc: "Die autosecure GmbH mit Sitz in Münster, sind ein junges Startup im Bereich der intelligenten und technologiebasierten Sicherheitstechnik. Unser Arbeitsschwerpunkt sind aktive Video-Managementsysteme für Gewerbekunden im gesamten Bundesgebiet. Du möchtest Aufbau und Skalierung eines wachsenden Startups mitgestalten? Du hast Lust in enger Zusammenarbeit mit unserer Geschäftsführung an strategischen Projekten mitzuwirken und unsere Ziele zu verwirklichen? Dann werde Teil unseres Teams und hilf uns dabei unsere Erfolgsstory gemeinsam zu schreiben!",
      location: "Münster",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",

      tasks: [
        "Erstelle neue Apps für unsere Kunden im Bereich der Digitalisierung oder entwickle bestehende Apps weiter",
        "Konzeption, Entwicklung und kontinuierliche Optimierung von nativen Apps in SwiftUI & Combine (iOS)",
        "Dokumentation von Code und Workflows",
        "Implementierung von UI-Vorgaben",
        "Eigenständiges Testing und Bugfixing",
        "Enge Zusammenarbeit mit unseren Marketing- & Sales-Units",
        "Hohe Einsatz- und Leistungsbereitschaft",
      ],
      profile: [
        "Ein IT-Studium, ein vergleichbares Studium oder eine IT-Ausbildung",
        "Aussagekräftige Referenzen, idealerweise im Live-Betrieb",
        "Mehrjährige Erfahrung in einer Agentur, Softwareunternehmen oder einem Startup",
        "Teamplayer unter Einsatz von agilen Methoden",
        "Hohe Einsatz- und Leistungsbereitschaft",
        "Innovationsfreude und Spaß an der Weiterentwicklung zeichnen Sie aus",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
      ],
    },
  },
  {
    id: 4,
    title: "Frontend-Entwickler Laravel, PHP",
    type: "Festanstellung / Vollzeit",
    location: "Münster",
    starting: "Ab sofort",
    details: {
      desc: "Die autosecure GmbH mit Sitz in Münster, sind ein junges Startup im Bereich der intelligenten und technologiebasierten Sicherheitstechnik. Unser Arbeitsschwerpunkt sind aktive Video-Managementsysteme für Gewerbekunden im gesamten Bundesgebiet. Du möchtest Aufbau und Skalierung eines wachsenden Startups mitgestalten? Du hast Lust in enger Zusammenarbeit mit unserer Geschäftsführung an strategischen Projekten mitzuwirken und unsere Ziele zu verwirklichen? Dann werde Teil unseres Teams und hilf uns dabei unsere Erfolgsstory gemeinsam zu schreiben!",
      location: "Münster",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",

      tasks: [
        "Entwicklung und Weiterentwicklung des autosecure Eco-Systems",
        "Entwicklung von Schnittstellen für kundeneigene ERP-Systeme",
        "Entwurf und Implementierung von Laravel-Anwendungen unter Berücksichtigung von Wartbarkeit, Fehlertoleranz und Skalierbarkeit",
        "Umwandlung komplexer, hochrangiger Anforderungen in konkrete technische Spezifikationen und Schätzungen zur Unterstützung der Projektplanung und Entscheidungsfindung",
        "Bereitstellung und Entgegennahme von konstruktivem Feedback in technischen Besprechungen und Code-Reviews",
        "Enge Zusammenarbeit mit unseren Marketing- und Sales-Units",
        "Enge Zusammenarbeit mit unserer Produkt-Entwicklung",
        "prototyping",
      ],
      profile: [
        "Fundierte Kenntnisse und Fachwissen mit dem Laravel PHP-Framework",
        "Mindestens 5 Jahre Erfahrung mit dem Schreiben von PHP-Code in Produktionsqualität",
        "Tiefgreifende Erfahrung mit und Verständnis für das Laravel-Framework ist ein Muss",
        "Aktuelle Kenntnisse der neuesten PHP- und Laravel-Versionen und des umgebenden Ökosystems",
        "Erfahrung in der Dokumentation, Erstellung und Nutzung von RESTful APIs",
        "Selbstvertrauen in die eigenständige Übernahme komplexer Aufgaben und deren Umsetzung in gut getestete und wartbare Lösungen",
        "Erfahrung mit einem kollaborativen Git-Workflow, wie z. B. 'Git Flow'",
        "Vertrautheit mit der Linux-Befehlszeile",
        "Einsatzbereitschaft, Leistungsbereitschaft und Offenheit",
        "Teamgeist und gute Kommunikationsfähigkeiten",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
      ],
    },
  },
  {
    id: 5,
    title: "IT-Support",
    type: "Festanstellung / Vollzeit",
    location: "Münster",
    starting: "Ab sofort",
    details: {
      desc: "Die autosecure GmbH ist ein junges Unternehmen mit Hauptsitz in Münster im Bereich intelligenter Sicherheitstechnik und innovativer Hard- und Softwarelösungen für den Automobilhandel und die Automobillogistik. Wir agieren bundesweit und sind seit unserer Gründung im Jahr 2020 sehr stark gewachsen. Um diese Entwicklung weiter fortzusetzen möchten wir unsere IT-Unit weiter stärken und suchen zum nächstmöglichen Zeitpunkt einen IT-Support Spezialisten.",
      location: "Münster",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",
      tasks: [
        "Unsere Sicherheitsanlagen sind zu 100% intelligent vernetzte IT-Systeme. Die regelmäßige Überprüfung von Soll-Zuständen und korrekte Einstellung aller Parameter ist ein elementarer Baustein für die Sicherheit unserer Kundensysteme. Für diese zentrale Aufgabe suchen wir Sie!",
      ],
      profile: [
        "Abgeschlossene Berufsausbildung im IT-Bereich",
        "Erfahrungen im 1st Level Support",
        "Sicherer Umgang mit Windows Betriebssystemen",
        "Gute Netzwerk- und Hardware-Kenntnisse",
        "Verlässlich, kommunikativ, engagiert",
      ],
      offer: [
        "Spannende, bundesweite Projekte in einem hochmotivierten und sehr kollegialen Team",
        "Persönliche Entwicklungsmöglichkeiten in einem zukunftsorientierten und modernen Unternehmen",
        "Leistungsorientierte Vergütung",
        "Viel Spaß und Entfaltungsmöglichkeiten",
        "Sofortiger Einstieg in Vollzeit/Teilzeit",
        "Homeoffice möglich",
      ],
    },
  },
  {
    id: 6,
    title: "Junior Account Manager",
    type: "Festanstellung / Vollzeit",
    location: "Münster",
    starting: "Ab sofort",
    details: {
      desc: "The autosecure GmbH based in Münster, are a young startup in the field of intelligent and technology-based security technology. Our work focuses on active video management systems for commercial customers throughout Germany. Would you like to help shape the development and scaling of a growing startup? Would you like to work closely with our management on strategic projects and achieve our goals? Then become part of our team and help us to write our success story together!",
      location: "Münster",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",
      tasks: [
        "Unterstützung bei Neukunden-Akquise",
        "Kunden-Support mit hoher Einsatzbereitschaft",
        "Betreuung, Beratung und Support für ein maximale Kunden-Erlebnisse",
        "Aufbereitung von Projekt-Unterlagen",
        'Mitverantwortlich für unsere "Customer Happiness Garantie"',
      ],
      profile: [
        "Wir suchen Berufseinsteiger oder Quereinsteiger mit einer Affinität für IT und moderne Technologien",
        "Einsatzbereitschaft, Leistungsbereitschaft und Offenheit",
        "Reisebereitschaft (bundesweit)",
        "Führerschein Klasse B wird vorausgesetzt",
        "Starke Persönlichkeit und selbstbewusstes Auftreten",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
        "Sehr gute Aufstiegs- und Entwicklungsmöglichkeiten",
      ],
    },
  },

  {
    id: 7,
    title: "System Engineer / IT Technik im Außendienst",
    type: "Festanstellung / Vollzeit",
    location: "Münster / Bundesweit",
    starting: "Ab sofort",
    details: {
      desc: "autosecure GmbH ist Spezialanbieter im Bereich der Sicherung von Automobilhandels- und Logistikbetrieben. Wir betreuen unsere Kunden bundesweit und liefern hochwertige Kamera-Überwachungslösungen auf Basis modernster Cloud- und Netzwerkarchitektur. Zum nächstmöglichen Zeitpunkt suchen wir einen erfahrenen Netzwerk- und IT-Spezialisten für die Einrichtung und Betreuung unserer Kundensysteme.",
      location: "Münster / Bundesweit",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",

      tasks: [
        "Sie verantworten die Inbetriebnahme, Konfiguration und Betreuung im Betrieb der bundesweit bei unseren Kudnen installierten Kamerasysteme. Im Falle von Systemausfällen und Störungen tragen Sie dafür Sorge, dass eine schnellstmögliche Wiederherstellung des Sollzustandes gewährleistet wird.",
        "Mit Ihrem IT-KnowHow und Ihrer ausgeprägten Problemlösungs- und Teamkompetenz leisten Sie Ihren wertvollen Beitrag zur kontinuierlichen Verbesserung unseres Systemsetups.",
        "Sie übernehmen auch im direkten Kundenkontakt Verantwortung und leisten wichtige Schnittstellenarbeit zwischen Montageteam und Kundenbetreuung.",
      ],
      profile: [
        "Sie haben fundierte Erfahrungen im Aufsetzen und Einrichten von Netzwerk-, Cloud- & IP-basierten Systemen vorzugsweise im Bereich Video. Sie haben eine uneingeschränkte Reisebereitschaft im gesamten Bundesgebiet für die direkte Vor-Ort-Betreuung und Einrichtung unserer Kundensysteme.",
        "Vorzugsweise haben Sie eine Grundausbildung zum Fachinformatiker für Systemintegration oder vergleichbar sowie mehrjährige Berufserfahrungen auf diesem Gebiet.",
        "Ihr Auftreten ist stets verbindlich. Sie sind kommunikationsstark, teamfähig und loyal.",
      ],
      offer: [
        "Spannende und innovative Produkte mit hoher Anziehungskraft und Relevanz für unsere Zielgruppe",
        "Flache Hierarchie mit einem starken Team-Spirit",
        "Überlassung Dienstwagen auch zur privaten Nutzung",
        "Apple Mobiltelefon, Premium-Notebook, Firmen-Kreditkarte",
        "Attraktive, erfolgsorientierte Vergütung und ein unbefristeter Arbeitsvertrag",
      ],
    },
  },
  {
    id: 8,
    title: "Praktikum Business Development",
    type: "Festanstellung / Vollzeit",
    location: "Münster",
    starting: "Ab sofort",
    details: {
      desc: "Die autosecure GmbH mit Sitz in Münster, sind ein junges Startup im Bereich der intelligenten und technologiebasierten Sicherheitstechnik. Unser Arbeitsschwerpunkt sind aktive Video-Managementsysteme für Gewerbekunden im gesamten Bundesgebiet. Du möchtest Aufbau und Skalierung eines wachsenden Startups mitgestalten? Du hast Lust in enger Zusammenarbeit mit unserer Geschäftsführung an strategischen Projekten mitzuwirken und unsere Ziele zu verwirklichen? Dann werde Teil unseres Teams und hilf uns dabei unsere Erfolgsstory gemeinsam zu schreiben!",
      location: "Münster",
      base: "Ab sofort in Vollzeit",
      type: "Festanstellung",
      tasks: [
        "Im Rahmen deines Praktikums arbeitest du schwerpunktmäßig mit unserer Geschäftsführung daran, unser Portfolio sinnvoll und nachhaltig zu erweitern",
        "Du recherchierst und entwickelst für eine innovative Produkterweiterung ein Technologie- und Vertriebskonzept",
        "Du bereitest das Marketingkonzept für die Produktinnovation gemeinsam mit unserer Grafikagentur vor",
        "Du hilfst bei der Recherche von potentiellen Leads, evaluierst diese und trägst somit zur Neukundenakquise bei",
      ],
      profile: [
        "Du absolvierst gerade ein Studium oder hast Dein Studium abgeschlossen und suchst einen spannenden Einstieg in die Berufswelt",
        "Kommunikationsstärke und ein hohes Maß an Selbstbewusstsein",
        "Offen für Neues und kritisches Denken",
        "Strukturierte Arbeitsweise",
        "Hohe Reisebereitschaft",
      ],
      offer: [
        "Herausfordernde Aufgaben in einem agilen, dynamischen und expandierenden Startup-Umfeld",
        "Spannende bundesweite Projekte rund um die Erweiterung unseres Produkt-Portfolios",
        "Ein ambitioniertes und hochmotiviertes Team mit flachen Hierarchien",
        "Die Möglichkeit, deine individuellen Stärken und eigenen Ideen mit viel Gestaltungsfreiraum einzubringen sowie dich beruflich und persönlich weiterzuentwickeln",
      ],
    },
  },
];
