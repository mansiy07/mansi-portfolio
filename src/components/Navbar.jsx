// ======================================================
// File Name      : Navbar.jsx
// Author         : Mansi Yadav
// Purpose        : Portfolio Navigation Bar
// Description    : Responsive navbar with Dark / Light mode
// ======================================================

import { useState } from "react";

// ================= Navbar Component =================

function Navbar({ darkMode, toggleTheme }) {

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

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[var(--bg)]
        border-b
        border-[var(--border)]
        transition-colors
        duration-300
      "
    >

      {/* ================= Main Container ================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* ==================================================
            Logo
        ================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          className="
            text-2xl
            md:text-3xl
            font-bold
            tracking-tight
            text-[var(--text)]
            hover:text-[var(--accent)]
            transition-colors
            duration-300
          "
        >
          Mansi
          <span className="text-[var(--accent)]">
            .
          </span>
        </a>


        {/* ==================================================
            Desktop Navigation Links
        ================================================== */}

        <ul
          className="
            hidden
            md:flex
            items-center
            gap-10
            text-[var(--text-secondary)]
          "
        >

          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([name, link]) => (

            <li key={name}>

              <a
                href={link}
                className="
                  relative
                  py-2
                  hover:text-[var(--accent)]
                  transition-colors
                  duration-300
                  group
                "
              >

                {name}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[1px]
                    bg-[var(--accent)]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />

              </a>

            </li>

          ))}

        </ul>


        {/* ==================================================
            Right Side Controls
        ================================================== */}

        <div className="flex items-center gap-3">

          {/* ==================================================
              Single Theme Toggle
          ================================================== */}

          <button
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            title={
              darkMode
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            className="
              w-10
              h-10
              rounded-full
              border
              border-[var(--border)]
              text-[var(--accent)]
              bg-[var(--bg-card)]
              flex
              items-center
              justify-center
              text-lg
              hover:bg-[var(--accent-soft)]
              hover:border-[var(--accent-border)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            {darkMode ? "☀" : "☾"}
          </button>


          {/* ==================================================
              Desktop Contact Button
          ================================================== */}

          <a
            href="#contact"
            className="
              hidden
              md:flex
              items-center
              px-5
              py-2.5
              rounded-md
              border
              border-[var(--accent-border)]
              text-[var(--accent)]
              font-semibold
              hover:bg-[var(--accent)]
              hover:text-[#111111]
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
              text-[var(--accent)]
              text-3xl
              focus:outline-none
              transition-colors
              duration-300
            "
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* ==================================================
          Mobile Navigation Menu
      ================================================== */}

      {isMenuOpen && (

        <div
          className="
            md:hidden
            bg-[var(--bg)]
            border-t
            border-[var(--border)]
            px-6
            py-6
          "
        >

          <ul
            className="
              flex
              flex-col
              items-center
              gap-6
              text-[var(--text-secondary)]
            "
          >

            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (

              <li key={name}>

                <a
                  href={link}
                  onClick={closeMenu}
                  className="
                    hover:text-[var(--accent)]
                    transition-colors
                    duration-300
                  "
                >
                  {name}
                </a>

              </li>

            ))}


            {/* ==================================================
                Mobile Let's Talk
            ================================================== */}

            <li>

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  inline-flex
                  items-center
                  px-6
                  py-2.5
                  rounded-md
                  border
                  border-[var(--accent-border)]
                  text-[var(--accent)]
                  font-semibold
                  hover:bg-[var(--accent)]
                  hover:text-[#111111]
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