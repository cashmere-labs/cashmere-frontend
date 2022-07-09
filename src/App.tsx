import { PATHS } from "constants/paths";
import { useOnAccountsChange, useOnNetworkChange } from "ethylene/hooks";
import { useInitialTheme, useTheme } from "hooks";
import { Home, Pool } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.pool} element={<Pool />} />

          <Route path="*" element={<div>Not found</div>} />
        </Routes>
        <ToastContainer pauseOnHover={false} theme={theme} />
      </BrowserRouter>
    </>
  );
}

export default App;
