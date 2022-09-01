import { EthyleneProvider } from "ethylene/utils";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import "styles/index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EthyleneProvider>
        <App />
      </EthyleneProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();

window.console.log =
  process.env.NODE_ENV === "production" ? () => undefined : window.console.log;
