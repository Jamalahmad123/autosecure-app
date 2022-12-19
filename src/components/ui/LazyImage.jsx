import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ image }) => {
  return (
    <LazyLoadImage
      src={image.src}
      alt={image.alt}
      effect="blur"
      className={image.style || ""}
    />
  );
};

export default LazyImage;
