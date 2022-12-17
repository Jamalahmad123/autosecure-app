import {
  autosecure_tower_one,
  autosecure_tower_two,
  autosecure_tower_three,
  autosecure_tower_four,
  autosecure_tower_five,
  autosecure_tower_six,
} from "../../assets/animated-imgs";

const AnimatedTower = () => {
  return (
    <div className="animated-tower-img-container flex items-center justify-center w-[100px] h-[400px]">
      <img
        src={autosecure_tower_one}
        alt="autosecure-mobile"
        className="h-full tower-img img-1"
      />
      <img
        src={autosecure_tower_two}
        alt="autosecure-mobile"
        className="h-full tower-img img-2"
      />
      <img
        src={autosecure_tower_three}
        alt="autosecure-mobile"
        className="h-full tower-img img-3"
      />
      <img
        src={autosecure_tower_four}
        alt="autosecure-mobile"
        className="h-full tower-img img-4"
      />
      <img
        src={autosecure_tower_five}
        alt="autosecure-mobile"
        className="h-full tower-img img-5"
      />
      <img
        src={autosecure_tower_six}
        alt="autosecure-mobile"
        className="h-full tower-img img-6"
      />
    </div>
  );
};

export default AnimatedTower;
