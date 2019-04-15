import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./main/store";
import App from "./main/app";

import "./assets/less/index.css";

const target = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);
