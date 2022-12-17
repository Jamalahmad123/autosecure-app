import {
  autosecure_mobile_router_one,
  autosecure_mobile_router_two,
  autosecure_mobile_router_three,
  autosecure_mobile_router_four,
  autosecure_mobile_router_five,
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
  autosecure_mobile_router_seven,
  autosecure_mobile_router_eight,
  autosecure_mobile_router_nine,
  autosecure_mobile_router_ten,
];

const AnimatedRouter = () => {
  return (
    <div className="router-container relative w-full h-[400px]">
      {images.map((img, i) => (
        <img
          src={img}
          alt="autosecure-mobile-tower"
          className="router-img absolute left-0 w-full h-auto"
          key={i}
        />
      ))}
    </div>
  );
};

export default AnimatedRouter;
