import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Store from "./redux/utils/Store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
