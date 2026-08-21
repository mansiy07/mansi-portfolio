// ==========================================
// File Name : main.jsx
// Purpose   : React Entry Point
// ==========================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global CSS Import
import "./index.css";

// Main App Component
import App from "./App.jsx";

// Render React App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);