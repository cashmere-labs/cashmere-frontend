import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "store/slicers/theme";

export const useInitialTheme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("CashmereTheme");
    if (localStorageTheme === "dark") {
      dispatch(setTheme("dark"));
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      dispatch(setTheme("light"));
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, []);
};
