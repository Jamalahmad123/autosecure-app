import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Nav from "./components/Nav";
import Home from "./pages/Home";

import { lazy, Suspense, useEffect, useState } from "react";
import Spinner from "./components/ui/Spinner";

// import Partners from "./components/Partners";
// import Employes from "./components/Employes";
// import BookAppointment from "./components/BookAppointment";
// import ParticlesBackground from "./components/ui/ParticlesBackground";
import ParticlesBackground from "./components/ui/ParticlesBackground";
// import ApplyForm from "./pages/company/ApplyForm";
// import Footer from "./components/Footer";

// import IndustrySectors from "./pages/industry/IndustrySectors";
// import AutomobileAndMobility from "./pages/industry/AutomobileAndMobility";
// import AgriculturAndForming from "./pages/industry/AgriculturAndForming";
// import LocalizationSolutions from "./pages/solutions/LocalizationSolutions";
// import NewsDetail from "./pages/company/NewsDetail";
// import MobileSecurity from "./components/MobileSecurity";
// import Constructions from "./pages/industry/Constructions";
// import Solutions from "./pages/solutions/Solutions";
// import LogisticsAndGoods from "./pages/industry/LogisticsAndGoods";
// import Legal from "./pages/legal/Legal";
// import Imprint from "./pages/legal/Imprint";
// import Privacy from "./pages/legal/Privacy";
// import Conditions from "./pages/legal/Conditions";
// import Career from "./pages/company/Career";
// import JobDetails from "./pages/company/JobDetails";
// import SecuritySolutions from "./pages/solutions/SecuritySolutions";
// import ScanSolutions from "./pages/solutions/ScanSolutions";

// const ParticlesBackground = lazy(() =>
//   import("./components/ui/ParticlesBackground")
// );

// Pages
const Solutions = lazy(() => import("./pages/solutions/Solutions"));
const IndustrySectors = lazy(() => import("./pages/industry/IndustrySectors"));
const AutomobileAndMobility = lazy(() =>
  import("./pages/industry/AutomobileAndMobility")
);
const AgriculturAndForming = lazy(() =>
  import("./pages/industry/AgriculturAndForming")
);
const LocalizationSolutions = lazy(() =>
  import("./pages/solutions/LocalizationSolutions")
);
const Constructions = lazy(() => import("./pages/industry/Constructions"));
const LogisticsAndGoods = lazy(() =>
  import("./pages/industry/LogisticsAndGoods")
);
const Legal = lazy(() => import("./pages/legal/Legal"));
const Imprint = lazy(() => import("./pages/legal/Imprint"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Conditions = lazy(() => import("./pages/legal/Conditions"));
const Career = lazy(() => import("./pages/company/Career"));
const JobDetails = lazy(() => import("./pages/company/JobDetails"));
const ApplyForm = lazy(() => import("./pages/company/ApplyForm"));
const SecuritySolutions = lazy(() =>
  import("./pages/solutions/SecuritySolutions")
);
const ScanSolutions = lazy(() => import("./pages/solutions/ScanSolutions"));
const DigitalGate = lazy(() => import("./pages/solutions/DigitalGate"));
const GpsTracker = lazy(() => import("./pages/solutions/GpsTracker"));
const LocateApp = lazy(() => import("./pages/solutions/LocateApp"));
const NewsDetail = lazy(() => import("./pages/company/NewsDetail"));
const MobileSecurity = lazy(() => import("./components/MobileSecurity"));
const Compnay = lazy(() => import("./pages/company/Compnay"));
const AboutUs = lazy(() => import("./pages/company/AboutUs"));
const News = lazy(() => import("./pages/company/News"));
const Vision = lazy(() => import("./pages/company/Vision"));
const Values = lazy(() => import("./pages/company/Values"));
const Contact = lazy(() => import("./pages/company/Contact"));
const Partners = lazy(() => import("./components/Partners"));
const Employes = lazy(() => import("./components/Employes"));
const Footer = lazy(() => import("./components/Footer"));
const BookAppointment = lazy(() => import("./components/BookAppointment"));

const options = {
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: -999,
  },
  background: {
    color: "#f2f2f7",
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#0A84FF",
    },
    links: {
      color: "#dadada",
      distance: 250,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 1 },
    },
  },
  retina_detect: true,
};

function App() {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }
    return () => window.removeEventListener("load", onPageLoad);
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<div className="bg-clrVeryLightGray" />}>
          {playAnimation && <ParticlesBackground options={options} />}
        </Suspense>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/solutions"
            element={
              <Suspense fallback={<Spinner />}>
                <Solutions />
              </Suspense>
            }
          />
          <Route
            path="/solutions/mobile-security"
            element={
              <Suspense fallback={<Spinner />}>
                <MobileSecurity />
              </Suspense>
            }
          />
          <Route
            path="/solutions/security-solutions"
            element={
              <Suspense fallback={<Spinner />}>
                <SecuritySolutions />
              </Suspense>
            }
          />
          <Route
            path="/solutions/scanner-solutions"
            element={
              <Suspense fallback={<Spinner />}>
                <ScanSolutions />
              </Suspense>
            }
          />
          <Route
            path="/solutions/digital-gate-keeper"
            element={
              <Suspense fallback={<Spinner />}>
                <DigitalGate />
              </Suspense>
            }
          />
          <Route
            path="/solutions/locate-solutions"
            element={
              <Suspense fallback={<Spinner />}>
                <LocalizationSolutions />
              </Suspense>
            }
          />
          <Route
            path="/solutions/gps-tracker"
            element={
              <Suspense fallback={<Spinner />}>
                <LocateApp />
              </Suspense>
            }
          />

          <Route
            path="/industry"
            element={
              <Suspense fallback={<Spinner />}>
                <IndustrySectors />
              </Suspense>
            }
          />
          <Route
            path="/industry/automobile-mobility"
            element={
              <Suspense fallback={<Spinner />}>
                <AutomobileAndMobility />
              </Suspense>
            }
          />
          <Route
            path="/industry/agriculture-formings"
            element={
              <Suspense fallback={<Spinner />}>
                <AgriculturAndForming />
              </Suspense>
            }
          />
          <Route
            path="/industry/construction"
            element={
              <Suspense fallback={<Spinner />}>
                <Constructions />
              </Suspense>
            }
          />
          <Route
            path="/industry/logistics-goods"
            element={
              <Suspense fallback={<Spinner />}>
                <LogisticsAndGoods />
              </Suspense>
            }
          />
          <Route
            path="/company"
            element={
              <Suspense fallback={<Spinner />}>
                <Compnay />
              </Suspense>
            }
          />
          <Route
            path="/company/about-us"
            element={
              <Suspense fallback={<Spinner />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/company/contact"
            element={
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/company/news"
            element={
              <Suspense fallback={<Spinner />}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/news/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <NewsDetail />
              </Suspense>
            }
          />
          <Route
            path="/company/career"
            element={
              <Suspense fallback={<Spinner />}>
                <Career />
              </Suspense>
            }
          />
          <Route
            path="/company/career/job/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <JobDetails />
              </Suspense>
            }
          />
          <Route
            path="/company/career/job/apply-now"
            element={
              <Suspense fallback={<Spinner />}>
                <ApplyForm />
              </Suspense>
            }
          />
          <Route
            path="/company/values"
            element={
              <Suspense fallback={<Spinner />}>
                <Values />
              </Suspense>
            }
          />
          <Route
            path="/company/mission-vision"
            element={
              <Suspense fallback={<Spinner />}>
                <Vision />
              </Suspense>
            }
          />
          <Route
            path="/legal"
            element={
              <Suspense fallback={<div />}>
                <Legal />
              </Suspense>
            }
          />
          <Route
            path="/legal/imprint"
            element={
              <Suspense fallback={<div />}>
                <Imprint />
              </Suspense>
            }
          />
          <Route
            path="/legal/privacy"
            element={
              <Suspense fallback={<div />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/legal/conditions"
            element={
              <Suspense fallback={<div />}>
                <Conditions />
              </Suspense>
            }
          />
        </Routes>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Partners />
          <Employes />
          <BookAppointment />
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
