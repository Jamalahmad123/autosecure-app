// import Particles from "react-tsparticles";
import { lazy, Suspense, useCallback, useState, useEffect } from "react";
import { loadFull } from "tsparticles";
const Particles = lazy(() => import("react-tsparticles"));

const ParticlesBackground = ({ options, id, bgColor }) => {
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
        color: "#FF4500",
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
    retina_detect: true,
  };

  return (
    <Suspense fallback={<div />}>
      <Particles
        options={options}
        init={particlesInit}
        loaded={particlesLoaded}
        id={id}
      />
    </Suspense>
  );
};

export default ParticlesBackground;
