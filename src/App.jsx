import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";

// import Partners from "./components/Partners";
// import Employes from "./components/Employes";
// import BookAppointment from "./components/BookAppointment";
// import ParticlesBackground from "./components/ui/ParticlesBackground";

import { lazy, Suspense } from "react";

const ParticlesBackground = lazy(() =>
  import("./components/ui/ParticlesBackground")
);

// import Solutions from "./pages/solutions/Solutions";
// import IndustrySectors from "./pages/industry/IndustrySectors";
// import Compnay from "./pages/company/Compnay";
// import AboutUs from "./pages/company/AboutUs";
// import News from "./pages/company/News";
// import Values from "./pages/company/Values";
// import Vision from "./pages/company/Vision";
// import Contact from "./pages/company/Contact";

const IndustrySectors = lazy(() => import("./pages/industry/IndustrySectors"));
const Solutions = lazy(() => import("./pages/solutions/Solutions"));
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
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: "#f5f5f5",
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
      color: "#D1D1D6",
      distance: 250,
      enable: true,
      opacity: 0.4,
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
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div />}>
        <ParticlesBackground options={options} />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/solutions"
          element={
            <Suspense fallback={<div />}>
              <Solutions />
            </Suspense>
          }
        />
        <Route
          path="/industry"
          element={
            <Suspense fallback={<div />}>
              <IndustrySectors />
            </Suspense>
          }
        />
        <Route
          path="/company"
          element={
            <Suspense fallback={<div />}>
              <Compnay />
            </Suspense>
          }
        />
        <Route
          path="/company/about"
          element={
            <Suspense fallback={<div />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/company/contact"
          element={
            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/company/news"
          element={
            <Suspense fallback={<div />}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="/company/values"
          element={
            <Suspense fallback={<div />}>
              <Values />
            </Suspense>
          }
        />
        <Route
          path="/company/vision"
          element={
            <Suspense fallback={<div />}>
              <Vision />
            </Suspense>
          }
        />
      </Routes>
      <Suspense fallback={<div />}>
        <Partners />
        <Employes />
        <BookAppointment />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
