import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.less";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
