import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Store from "./Store/Store";
import { Provider } from "react-redux";

import Header from "./Components/Header/Header";
import Routes from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
