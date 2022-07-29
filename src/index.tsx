import { EthyleneProvider } from "ethylene/utils";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import "styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EthyleneProvider>
        <App />
      </EthyleneProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
