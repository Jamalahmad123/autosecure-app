import { useEffect } from "react";
import IndustrySectorSolutions from "../../components/IndustrySectorSolutions";
import { useTitle } from "../../hooks/customHooks";

const IndustrySectors = () => {
  useTitle("Industry – autosecure | Secure. Scan. Locate.");
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
