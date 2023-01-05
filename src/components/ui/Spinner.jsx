import { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="max-h-screen min-h-screen flex items-center justify-center bg-clrLightGray z-[9999]">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
