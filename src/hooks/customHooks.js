import { useEffect } from "react";

// setting title for each page
export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, []);
};
