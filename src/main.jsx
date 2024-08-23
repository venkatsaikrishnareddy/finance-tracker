// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import FinanceProvider from "./context/financecontext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <FinanceProvider>
    <div className="min-h-screen bg-yellow-100 grid place-items-center p-4">
      <App />
    </div>
  </FinanceProvider>
);
