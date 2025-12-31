import React from "react"; // ✅ THIS WAS MISSING
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./components/layout/Navbar/navbar.styles.css";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
