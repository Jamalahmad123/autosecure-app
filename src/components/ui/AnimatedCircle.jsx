import React, { useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaCloud,
  FaCog,
  FaEuroSign,
  FaShieldVirus,
  FaVideo,
} from "react-icons/fa";

const AnimatedCircle = () => {
  const [label, setLabel] = useState("");
  const circleRef = useRef();
  const virusRef = useRef();
  const euroRef = useRef();
  const videoRef = useRef();
  const clockRef = useRef();
  const cloudRef = useRef();
  const cogRef = useRef();

  const labels = [
    "security guards",
    "Rental & leasing solutions",
    "Video remote security with live perpetrator address",
    "24/7 monitoring service",
    "autosecure ecosystem",
    "installation service",
  ];

  useEffect(() => {
    let i = 0;
    let v = 0;
    const interval = setInterval(() => {
      if (v == 6) {
        v = 0;
      }
      circleRef.current.style.transform = `rotate(${i}deg)`;
      setLabel(labels[v]);
      virusRef.current.style.transform = `rotate(${360 - i}deg)`;
      euroRef.current.style.transform = `rotate(${360 - i}deg)`;
      videoRef.current.style.transform = `rotate(${360 - i}deg)`;
      clockRef.current.style.transform = `rotate(${360 - i}deg)`;
      cloudRef.current.style.transform = `rotate(${360 - i}deg)`;
      cogRef.current.style.transform = `rotate(${360 - i}deg)`;

      circleRef.current.children[v].className =
        circleRef.current.children[v].className + " active";
      if (v != 0) {
        circleRef.current.children[v - 1].className =
          circleRef.current.children[v - 1].className.split(" ")[0];
      }
      if (v == 0) {
        circleRef.current.children[5].className =
          circleRef.current.children[5].className.split(" ")[0];
      }
      v++;
      i = i + 36;
      if (i == 360) {
        i = 0;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto bdt-ep-circle-info bg-clrVeryLightGray overflow-hidden">
      <div className="bdt-ep-circle-info-wrap h-[300px] w-[300px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
        <div className="bdt-ep-circle-info-inner" ref={circleRef}>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="1"
            // style={{ transform: "translate3d(200px, -346.41px, 0px)" }}
          >
            <div
              ref={virusRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaShieldVirus aria-hidden="true" />
            </div>
          </div>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="2"
            // style={{ transform: "translate3d(-200px, -346.41px, 0px)" }}
          >
            <div
              ref={euroRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaEuroSign size={30} aria-hidden="true" />
            </div>
          </div>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="3"
            // style={{ transform: "translate3d(-400px, 0px, 0px)" }}
          >
            <div
              ref={videoRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaVideo size={30} aria-hidden="true" />
            </div>
          </div>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="4"
            // style={{ transform: "translate3d(-200px, 346.41px, 0px)" }}
          >
            <div
              ref={clockRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaClock size={30} aria-hidden="true" />
            </div>
          </div>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="5"
            // style={{ transform: "translate3d(200px, 346.41px, 0px)" }}
          >
            <div
              ref={cloudRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaCloud size={30} aria-hidden="true" />
            </div>
          </div>
          <div
            className="bdt-ep-circle-info-sub-circle"
            data-circle-index="6"
            // style={{ transform: "translate3d(400px, 0px, 0px)" }}
          >
            <div
              ref={cogRef}
              style={{
                transform: "rotate(360deg)",
                transition: "all 2s ease 0s",
              }}
            >
              <FaCog size={30} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="bdt-ep-circle-info-content h-1/2 w-1/2 md:h-4/6 md:w-4/6 lg:h-[70%] lg:w-[70%]">
          <div className="bdt-ep-circle-info-item p-4">
            <span className="bdt-ep-circle-info-title text-sm md:text-2xl lg:text-3xl font-bold">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircle;
