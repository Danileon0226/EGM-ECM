import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Store from "./Store/Store";
import { Provider } from "react-redux";
import { routes } from "./Routes/Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          {routes.map((ruta) => (
            <Route
              path={ruta.path}
              element={<ruta.component />}
              key={ruta.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
