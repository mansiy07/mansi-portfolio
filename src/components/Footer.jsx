// =====================================================
// File Name   : Footer.jsx
// Purpose     : Portfolio Footer
// Author      : Mansi Yadav
// Description : Clean Black / Light Peach Footer
// =====================================================

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


// =====================================================
// Footer Component
// =====================================================

function Footer() {
  return (

    <footer
      className="
        w-full
        bg-[var(--bg)]
        border-t
        border-[var(--border)]
        text-[var(--text-secondary)]
        transition-colors
        duration-300
      "
    >

      {/* =================================================
          Main Container
      ================================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          py-8
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          {/* =================================================
              Copyright / Description
          ================================================= */}

          <div
            className="
              text-center
              md:text-left
            "
          >

            <p
              className="
                text-[var(--text)]
                font-medium
              "
            >
              © 2026{" "}

              <span
                className="
                  text-[var(--accent)]
                "
              >
                Mansi Yadav
              </span>
            </p>


            <p
              className="
                text-sm
                text-[var(--text-muted)]
                mt-1
              "
            >
              CSE Student | Aspiring Software Developer
            </p>

          </div>


          {/* =================================================
              Social Links
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            {/* ================= GitHub ================= */}

            <a
              href="https://github.com/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="
                w-10
                h-10
                rounded-lg
                flex
                items-center
                justify-center
                border
                border-[var(--border)]
                text-[var(--text-secondary)]
                hover:text-[var(--accent)]
                hover:border-[var(--accent-border)]
                hover:bg-[var(--accent-soft)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>


            {/* ================= LinkedIn ================= */}

            <a
              href="https://www.linkedin.com/in/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
                w-10
                h-10
                rounded-lg
                flex
                items-center
                justify-center
                border
                border-[var(--border)]
                text-[var(--text-secondary)]
                hover:text-[var(--accent)]
                hover:border-[var(--accent-border)]
                hover:bg-[var(--accent-soft)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* =================================================
            Bottom Divider
        ================================================= */}

        <div
          className="
            mt-7
            pt-5
            border-t
            border-[var(--border)]
            text-center
          "
        >

          <p
            className="
              text-xs
              text-[var(--text-muted)]
            "
          >
            © 2026 Mansi Yadav. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Footer;