import { useDispatch } from "react-redux";
import { useTypedSelector } from "store";
import { setTheme } from "store/slicers/theme";

export const useTheme = () => {
  const { theme } = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (Array.from(document.body.classList).includes("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      dispatch(setTheme("light"));
      localStorage.setItem("CashmereTheme", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      dispatch(setTheme("dark"));
      localStorage.setItem("CashmereTheme", "dark");
    }
  };

  return { toggleTheme, theme };
};
