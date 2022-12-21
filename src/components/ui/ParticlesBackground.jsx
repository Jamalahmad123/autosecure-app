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

  return (
    <Suspense fallback={<div className="bg-clrVeryLightGray" />}>
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
