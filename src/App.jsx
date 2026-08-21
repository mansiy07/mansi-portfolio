// ======================================================
// File Name      : App.jsx
// Author         : Mansi Yadav
// Purpose        : Main Portfolio Component
// Description    : Portfolio ka main entry point
// ======================================================

// ---------------- Component Imports ----------------

// Navigation Bar
import Navbar from "./components/Navbar";

// Hero Section
import Hero from "./components/Hero";

// About Section
import About from "./components/About";

// Skills Section
import Skills from "./components/Skills";

// Projects Section
import Projects from "./components/Projects";

// Experience Section
import Experience from "./components/Experience";

// Contact Section
import Contact from "./components/Contact";

// Footer Section
import Footer from "./components/Footer";

// ---------------- Main Component ----------------

function App() {
  return (
    // Main Website Container
    <div className="min-h-screen bg-[#080014] text-white overflow-x-hidden">

      {/* ================= Navbar ================= */}
      <Navbar />

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