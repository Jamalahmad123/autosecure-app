import { useState, useEffect, useRef } from "react";

const TypeWriter = ({ labels }) => {
  const [index, setindex] = useState(0);
  const textContainerRef = useRef();

  function switchText() {
    let decreasing = true;
    let currentWidth = 140;
    let deltaWidth = 20;

    return setInterval(() => {
      if (decreasing) {
        currentWidth -= deltaWidth;

        textContainerRef.current.style.width = `${currentWidth}px`;
        if (currentWidth <= -10) {
          setindex((prevState) =>
            prevState === labels.length - 1 ? 0 : prevState + 1
          );
          decreasing = false;
        }
      } else {
        currentWidth += deltaWidth;
        textContainerRef.current.style.width = `${currentWidth}px`;
        if (currentWidth >= 160) {
          decreasing = true;
        }
      }
    }, 300);
  }

  useEffect(() => {
    const id = switchText();
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div
        className="border-r-2 border-black inline-block animated-text"
        ref={textContainerRef}
        style={{ overflow: "hidden", transition: "width 400ms linear" }}
      >
        <h2 className="text-clrPrimary text-2xl inline-block">
          {labels[index]}
        </h2>
      </div>
    </>
  );
};

export default TypeWriter;
