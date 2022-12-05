import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/solutions/Solutions";
import IndustrySectors from "./pages/industry/IndustrySectors";
import Compnay from "./pages/company/Compnay";
import AboutUs from "./pages/company/AboutUs";
import News from "./pages/company/News";
import Values from "./pages/company/Values";
import Vision from "./pages/company/Vision";
import Contact from "./pages/company/Contact";
import Partners from "./components/Partners";
import Employes from "./components/Employes";
import BookAppointment from "./components/BookAppointment";

import ParticlesBackground from "./components/ui/ParticlesBackground";

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
      <ParticlesBackground options={options} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industry" element={<IndustrySectors />} />
        <Route path="/company" element={<Compnay />} />
        <Route path="/company/about" element={<AboutUs />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/news" element={<News />} />
        <Route path="/company/values" element={<Values />} />
        <Route path="/company/vision" element={<Vision />} />
      </Routes>
      <Partners />
      <Employes />
      <BookAppointment />
      <Footer />
    </Router>
  );
}

export default App;
