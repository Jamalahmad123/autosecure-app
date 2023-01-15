import { useState, useEffect, useRef } from "react";

const TypeWriter = ({ width, labels, hasStyle }) => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [index, setindex] = useState(0);
  const textContainerRef = useRef();

  function switchText() {
    let decreasing = true;
    let currentWidth = width;
    let deltaWidth = 20;

    return setInterval(() => {
      if (decreasing && textContainerRef.current) {
        currentWidth -= deltaWidth;

        textContainerRef.current.style.width = `${currentWidth}px`;
        if (currentWidth <= -10) {
          setindex((prevState) =>
            prevState === labels.length - 1 ? 0 : prevState + 1
          );
          decreasing = false;
        }
      } else if (!decreasing && textContainerRef.current) {
        currentWidth += deltaWidth;
        textContainerRef.current.style.width = `${currentWidth}px`;
        if (currentWidth >= width) {
          decreasing = true;
        }
      }
    }, 300);
  }

  useEffect(() => {
    const onPageLoad = () => setPlayAnimation(true);

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }
    // let id;
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     const [entry] = entries;
    //     setIsVisible(entry.isIntersecting);
    //     if (entry.isIntersecting && intersectContainer.current) {
    //       id = switchText();
    //     } else {
    //       clearInterval(id);
    //     }
    //   },
    //   {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 1.0,
    //   }
    // );

    // observer.observe(intersectContainer.current);
    const id = switchText();

    return () => {
      clearInterval(id);
      window.removeEventListener("load", onPageLoad);
    };
  }, []);

  // if (loading) {
  //   return <></>;
  // }

  return (
    <>
      {playAnimation && (
        <div
          className={`border-r-2 inline-block animated-text ${hasStyle}`}
          ref={textContainerRef}
          style={{ overflow: "hidden", transition: "all 300ms linear" }}
        >
          <h2
            className={`${
              hasStyle ? "text-clrSky" : "text-clrPrimary"
            } text-2xl inline-block`}
          >
            {labels[index]}
          </h2>
        </div>
      )}
    </>
  );
};

export default TypeWriter;
