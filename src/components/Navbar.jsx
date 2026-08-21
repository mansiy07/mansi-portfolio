// ======================================================
// File Name   : Navbar.jsx
// Author      : Mansi Yadav
// Purpose     : Portfolio Navigation Bar
// Description : Responsive, sticky and modern navbar
// ======================================================

import { useState } from "react";

// ================= Navbar Component =================

function Navbar() {

  // ==================================================
  // Mobile Menu State
  // ==================================================

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ==================================================
  // Close Mobile Menu
  // ==================================================

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // ==================================================
    // Main Navigation Bar
    // ==================================================

    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">

      {/* ================= Main Container ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* ==================================================
            Logo
        ================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl md:text-3xl font-extrabold tracking-wide group"
        >
          Mansi
          <span className="text-cyan-400 group-hover:text-cyan-300 transition duration-300">
            .
          </span>
        </a>


        {/* ==================================================
            Desktop Navigation Links
        ================================================== */}

        <ul className="hidden md:flex items-center gap-10 text-gray-300">

          {/* Home */}

          <li>
            <a
              href="#home"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              Home

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>


          {/* About */}

          <li>
            <a
              href="#about"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              About

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>


          {/* Skills */}

          <li>
            <a
              href="#skills"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              Skills

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>


          {/* Projects */}

          <li>
            <a
              href="#projects"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              Projects

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>


          {/* Experience */}

          <li>
            <a
              href="#experience"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              Experience

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>


          {/* Contact */}

          <li>
            <a
              href="#contact"
              className="relative py-2 hover:text-cyan-400 transition duration-300 group"
            >
              Contact

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

        </ul>


        {/* ==================================================
            Desktop Contact Button
        ================================================== */}

        <a
          href="#contact"
          className="
            hidden md:flex
            items-center
            px-5
            py-2.5
            rounded-full
            border
            border-cyan-400
            text-cyan-400
            font-semibold
            hover:bg-cyan-400
            hover:text-slate-950
            hover:shadow-[0_0_20px_#22d3ee]
            transition-all
            duration-300
          "
        >
          Let's Talk
        </a>


        {/* ==================================================
            Mobile Hamburger Button
        ================================================== */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            md:hidden
            text-cyan-400
            text-3xl
            focus:outline-none
            transition-transform
            duration-300
          "
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ==================================================
          Mobile Navigation Menu
      ================================================== */}

      {isMenuOpen && (
        <div
          className="
            md:hidden
            bg-slate-950/95
            backdrop-blur-xl
            border-t
            border-cyan-500/10
            px-6
            py-6
          "
        >

          <ul className="flex flex-col items-center gap-6 text-gray-300">

            {/* Home */}

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>
            </li>


            {/* About */}

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>


            {/* Skills */}

            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>


            {/* Projects */}

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>


            {/* Experience */}

            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                Experience
              </a>
            </li>


            {/* Contact */}

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>


            {/* Let's Talk */}

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  inline-flex
                  items-center
                  px-6
                  py-2.5
                  rounded-full
                  border
                  border-cyan-400
                  text-cyan-400
                  font-semibold
                  hover:bg-cyan-400
                  hover:text-slate-950
                  hover:shadow-[0_0_20px_#22d3ee]
                  transition-all
                  duration-300
                "
              >
                Let's Talk
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}


// ======================================================
// Export Navbar Component
// ======================================================

export default Navbar;