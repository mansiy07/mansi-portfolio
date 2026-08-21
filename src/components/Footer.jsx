// =====================================================
// File Name   : Footer.jsx
// Purpose     : Portfolio Footer
// Author      : Mansi Yadav
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
        bg-[#080014]
        border-t
        border-purple-500/20
        text-gray-400
      "
    >

      {/* ================= Main Container ================= */}

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
            gap-5
          "
        >

          {/* ================= Copyright ================= */}

          <div className="text-center md:text-left">

            <p className="text-gray-300 font-medium">
              © 2026{" "}
              <span className="text-purple-400">
                Mansi Yadav
              </span>
            </p>

            <p className="text-sm text-gray-500 mt-1">
              CSE Student | Aspiring Software Developer
            </p>

          </div>


          {/* ================= Social Links ================= */}

          <div className="flex items-center gap-4">

            {/* ================= GitHub ================= */}

            <a
              href="https://github.com/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                rounded-lg
                flex
                items-center
                justify-center
                border
                border-purple-500/20
                text-gray-400
                hover:text-purple-300
                hover:border-purple-400/60
                hover:bg-purple-500/10
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>


            {/* ================= LinkedIn ================= */}

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                rounded-lg
                flex
                items-center
                justify-center
                border
                border-purple-500/20
                text-gray-400
                hover:text-purple-300
                hover:border-purple-400/60
                hover:bg-purple-500/10
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* ================= Bottom Divider ================= */}

        <div
          className="
            mt-7
            pt-5
            border-t
            border-purple-500/10
            text-center
          "
        >

          <p className="text-xs text-gray-600">
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