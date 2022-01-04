import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.min.css";

import { store, persistor } from "./redux/store.js";

ReactGA.initialize("G-EPCWKYEL85");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
