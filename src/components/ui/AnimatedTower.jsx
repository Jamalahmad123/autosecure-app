import { useEffect, useState } from "react";
import {
  autosecure_tower_one,
  autosecure_tower_two,
  autosecure_tower_three,
  autosecure_tower_four,
  autosecure_tower_five,
  autosecure_tower_six,
} from "../../assets/animated-imgs";
import LazyImage from "./LazyImage";

const images = [
  autosecure_tower_one,
  autosecure_tower_two,
  autosecure_tower_three,
  autosecure_tower_four,
  autosecure_tower_four,
  autosecure_tower_five,
  autosecure_tower_six,
];

const AnimatedTower = () => {
  const [index, setIndex] = useState(0);

  function switchSrc() {
    return setInterval(() => {
      setIndex((prevState) =>
        prevState === images.length - 1 ? 0 : prevState + 1
      );
    }, 1000);
  }

  useEffect(() => {
    const id = switchSrc();
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <figure className="max-h-[60vh]">
      {/* <img src={images[index]} alt="autosecure-tower" className="h-[60vh]" /> */}
      <LazyImage
        image={{
          src: images[index],
          alt: "autosecure-tower",
          style: "h-[60vh] w-[100px]",
        }}
      />
    </figure>
  );
};

export default AnimatedTower;
