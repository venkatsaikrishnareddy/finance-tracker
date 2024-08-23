import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import FinanceProvider from "./context/financecontext";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <FinanceProvider>
    <div className=" ">
      <App />
    </div>
  </FinanceProvider>
);
