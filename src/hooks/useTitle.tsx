import { useEffect } from "react";

export const useTitle = (title?: string) => {
  useEffect(() => {
    let _title = "Cashmere App";
    if (title) {
      _title = `${_title} | ${title}`;
    }
    document.title = _title;

    return () => {
      document.title = "Cashmere App";
    };
  }, []);
};
