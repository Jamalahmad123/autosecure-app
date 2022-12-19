import { useEffect } from "react";
import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";

const IndustrySectors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <IndustrySectorSolutions />
    </>
  );
};

export default IndustrySectors;
