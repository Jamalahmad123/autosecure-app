import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = ({ options, id }) => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    container.smooth = true;
  }, []);

  const defaultOptions = {
    fpsLimit: 60,
    fullScreen: {
      enable: false,
      zIndex: -999,
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
        color: "#EB212E",
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
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 1 },
      },
    },
  };

  return (
    <Particles
      options={options || defaultOptions}
      init={particlesInit}
      loaded={particlesLoaded}
      id={id}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;
