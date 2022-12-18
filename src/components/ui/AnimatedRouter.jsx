import { useEffect, useRef, useState } from "react";
import {
  autosecure_mobile_router_one,
  autosecure_mobile_router_two,
  autosecure_mobile_router_three,
  autosecure_mobile_router_four,
  autosecure_mobile_router_five,
  autosecure_mobile_router_six,
  autosecure_mobile_router_seven,
  autosecure_mobile_router_eight,
  autosecure_mobile_router_nine,
  autosecure_mobile_router_ten,
} from "../../assets/animated-imgs";

const images = [
  autosecure_mobile_router_one,
  autosecure_mobile_router_two,
  autosecure_mobile_router_three,
  autosecure_mobile_router_four,
  autosecure_mobile_router_five,
  autosecure_mobile_router_six,
  autosecure_mobile_router_seven,
  autosecure_mobile_router_eight,
  autosecure_mobile_router_nine,
  autosecure_mobile_router_ten,
];

const AnimatedRouter = () => {
  const [index, setIndex] = useState(0);

  function switchSrc() {
    setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1200);
  }

  useEffect(() => {
    switchSrc();
  }, []);

  return (
    <figure>
      <img src={images[index]} alt="autosecure-tower" className="w-full" />
    </figure>
  );
};

export default AnimatedRouter;
