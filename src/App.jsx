// ======================================================
// File Name      : App.jsx
// Author         : Mansi Yadav
// Purpose        : Main Portfolio Component
// Description    : Portfolio main entry point + Theme Toggle
// ======================================================

import { useEffect, useState } from "react";

// ---------------- Component Imports ----------------

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ---------------- Main Component ----------------

function App() {

  // ==================================================
  // Theme State
  // Dark Mode = Default
  // ==================================================

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("portfolio-theme");

    return savedTheme !== "light";
  });


  // ==================================================
  // Save Theme
  // ==================================================

  useEffect(() => {

    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);


  // ==================================================
  // Toggle Theme
  // ==================================================

  const toggleTheme = () => {

    setDarkMode((prev) => !prev);

  };


  // ==================================================
  // Theme Colors
  // ==================================================

  const themeStyles = darkMode

    ? {

        // ================= Dark Mode =================

        "--bg": "#050505",
        "--bg-secondary": "#0b0b0b",
        "--bg-card": "#101010",

        "--text": "#f5f5f5",
        "--text-secondary": "#b5b5b5",
        "--text-muted": "#777777",

        "--accent": "#f4b183",
        "--accent-hover": "#e5a06f",

        "--accent-soft":
          "rgba(244, 177, 131, 0.10)",

        "--accent-border":
          "rgba(244, 177, 131, 0.30)",

        "--border":
          "rgba(255, 255, 255, 0.10)",

        "--shadow":
          "0 8px 30px rgba(0, 0, 0, 0.30)",

        "--social-bg":
          "rgba(255, 255, 255, 0.04)",
      }

    : {

        // ================= Light Mode =================

        "--bg": "#fffaf5",
        "--bg-secondary": "#fff4e8",
        "--bg-card": "#ffffff",

        "--text": "#242424",
        "--text-secondary": "#666666",
        "--text-muted": "#888888",

        "--accent": "#c9894b",
        "--accent-hover": "#b5763c",

        "--accent-soft":
          "rgba(201, 137, 75, 0.10)",

        "--accent-border":
          "rgba(201, 137, 75, 0.30)",

        "--border":
          "rgba(80, 55, 35, 0.12)",

        "--shadow":
          "0 8px 30px rgba(80, 50, 30, 0.08)",

        "--social-bg":
          "rgba(201, 137, 75, 0.06)",
      };


  // ==================================================
  // Return
  // ==================================================

  return (

    <div
      className={`
        min-h-screen
        overflow-x-hidden
        transition-colors
        duration-500
        ${darkMode ? "dark" : "light"}
      `}
      style={{
        ...themeStyles,
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >

      {/* ==================================================
          Navbar
          Theme Toggle is inside Navbar
      ================================================== */}

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />


      {/* ================= Hero ================= */}

      <Hero />


      {/* ================= About ================= */}

      <About />


      {/* ================= Skills ================= */}

      <Skills />


      {/* ================= Projects ================= */}

      <Projects />


      {/* ================= Experience ================= */}

      <Experience />


      {/* ================= Contact ================= */}

      <Contact />


      {/* ================= Footer ================= */}

      <Footer />

    </div>
  );
}


// ======================================================
// Export Component
// ======================================================

export default App;