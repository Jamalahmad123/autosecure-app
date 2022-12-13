import { useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import Wrapper from "./Wrapper";

const MeetingVideo = ({ videoPath, poster }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const ref = useRef();

  const handlePlay = () => {
    ref.current.play();
    setIsPlaying((prev) => !prev);
  };

  return (
    <Wrapper className="px-4 py-6 relative">
      <div className="relative">
        <video
          preload="none"
          muted
          poster={poster}
          ref={ref}
          controls={!isPlaying}
        >
          <source src={videoPath} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        {isPlaying && (
          <button
            className="text-8xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-light"
            onClick={handlePlay}
          >
            <FaRegPlayCircle />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default MeetingVideo;
