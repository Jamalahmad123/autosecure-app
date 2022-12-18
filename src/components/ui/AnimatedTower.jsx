import { useEffect, useState } from "react";
import {
  autosecure_tower_one,
  autosecure_tower_two,
  autosecure_tower_three,
  autosecure_tower_four,
  autosecure_tower_five,
  autosecure_tower_six,
} from "../../assets/animated-imgs";

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
    <figure>
      <img src={images[index]} alt="autosecure-tower" className="h-[60vh]" />
    </figure>
    // <div className="animated-tower-img-container flex items-center justify-center w-[100px] h-[400px]">
    //   <img
    //     src={autosecure_tower_one}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-1"
    //   />
    //   <img
    //     src={autosecure_tower_two}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-2"
    //   />
    //   <img
    //     src={autosecure_tower_three}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-3"
    //   />
    //   <img
    //     src={autosecure_tower_four}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-4"
    //   />
    //   <img
    //     src={autosecure_tower_five}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-5"
    //   />
    //   <img
    //     src={autosecure_tower_six}
    //     alt="autosecure-mobile"
    //     className="h-full tower-img img-6"
    //   />
    // </div>
  );
};

export default AnimatedTower;
