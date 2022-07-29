import { PATHS } from "constants/paths";
import { useOnAccountsChange, useOnNetworkChange } from "ethylene/hooks";
import { useInitialTheme, useTheme } from "hooks";
import { Home, Pool, Swap, VeCSM, DAO } from "pages";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Test } from "pages/Test/Test";

const Main = () => {
  useInitialTheme();
  useOnAccountsChange(() => window.location.reload(), { interval: 1000 });
  useOnNetworkChange(() => window.location.reload());
  return null;
};

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.home} element={<Navigate to={PATHS.swap} />} />
          <Route path={PATHS.swap} element={<Swap />} />
          <Route path={PATHS.pool} element={<Pool />} />
          <Route path={PATHS.veCSM} element={<VeCSM />} />
          <Route path={PATHS.dao} element={<DAO />} />
          <Route path={"/test"} element={<Test />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
        <NavigationAnimator />
        <ToastContainer pauseOnHover={false} theme={theme} />
      </BrowserRouter>
    </>
  );
}

const NavigationAnimator = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.animate([{ opacity: 0.8 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
    });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default App;
