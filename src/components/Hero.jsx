// =====================================================
// File Name   : Hero.jsx
// Purpose     : Hero Section
// Author      : Mansi Yadav
// Description : Portfolio ka main introduction section
// =====================================================

// ================= Imports =================

import Profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

// =====================================================
// Hero Component
// =====================================================

function Hero() {
  return (

    // ================= Hero Section =================

    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080014]
        text-white
        flex
        items-center
        pt-24
        pb-12
      "
    >

      {/* ================= Purple Background Glow ================= */}

      <div
        className="
          absolute
          top-20
          left-1/4
          w-[300px]
          h-[300px]
          md:w-[450px]
          md:h-[450px]
          bg-purple-700/20
          rounded-full
          blur-[120px]
          md:blur-[140px]
          pointer-events-none
        "
      ></div>


      <div
        className="
          absolute
          right-0
          bottom-10
          w-[300px]
          h-[300px]
          md:w-[500px]
          md:h-[500px]
          bg-fuchsia-700/20
          rounded-full
          blur-[120px]
          md:blur-[150px]
          pointer-events-none
        "
      ></div>


      {/* =================================================
          Main Container
      ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          px-6
          sm:px-8
          lg:px-12
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        "
      >

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center lg:text-left"
        >

          {/* ================= Greeting ================= */}

          <p
            className="
              text-purple-300
              text-base
              sm:text-lg
              md:text-xl
              mb-3
              md:mb-4
              tracking-wide
            "
          >
            👋 Hello, I'm
          </p>


          {/* ================= Name ================= */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-tight
              bg-gradient-to-r
              from-purple-300
              via-fuchsia-400
              to-violet-500
              bg-clip-text
              text-transparent
              whitespace-nowrap
            "
          >
            Mansi Yadav
          </h1>


          {/* ================= Typing Animation ================= */}

          <div
            className="
              mt-4
              md:mt-5
              min-h-[42px]
              sm:min-h-[48px]
            "
          >

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,

                "Java Developer",
                2000,

                "Software Developer",
                2000,

                "Backend Developer",
                2000,

                "Problem Solver",
                2000,
              ]}
              wrapper="h2"
              speed={45}
              repeat={Infinity}
              className="
                block
                text-xl
                sm:text-2xl
                md:text-3xl
                font-semibold
                text-purple-400
                leading-relaxed
                break-words
              "
            />

          </div>


          {/* ================= Description ================= */}

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-gray-300
              mt-5
              md:mt-6
              leading-7
              md:leading-8
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            B.Tech Computer Science & Engineering student at{" "}
            <span className="text-purple-300 font-medium">
              Galgotias University
            </span>
            , passionate about building modern and scalable
            applications using{" "}
            <span className="text-fuchsia-300">
              Java, Spring Boot, React, REST APIs and MySQL.
            </span>
          </p>


          {/* ================= Second Description ================= */}

          <p
            className="
              text-sm
              sm:text-base
              text-gray-400
              mt-4
              leading-7
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            I enjoy solving problems, developing real-world projects
            and continuously improving my software development skills
            through coding and practical learning.
          </p>


          {/* =================================================
              Action Buttons
          ================================================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              flex-wrap
              justify-center
              lg:justify-start
              gap-4
              sm:gap-5
              mt-8
              md:mt-9
            "
          >

            {/* ================= View Projects ================= */}

            <a
              href="#projects"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                text-white
                font-semibold
                px-6
                sm:px-7
                py-3.5
                rounded-xl
                shadow-[0_0_25px_rgba(168,85,247,0.35)]
                hover:from-purple-500
                hover:to-fuchsia-500
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]
                transition-all
                duration-300
                w-full
                sm:w-auto
              "
            >
              <FaArrowRight />

              View Projects

            </a>


            {/* ================= Resume ================= */}

            <a
              href={resume}
              download="Mansi_Yadav_Resume.pdf"
              className="
                flex
                items-center
                justify-center
                gap-3
                border-2
                border-purple-500
                text-purple-200
                px-6
                sm:px-7
                py-3.5
                rounded-xl
                hover:bg-purple-600
                hover:text-white
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                transition-all
                duration-300
                w-full
                sm:w-auto
              "
            >
              <FaDownload />

              Resume

            </a>

          </div>


          {/* =================================================
              Social Media Icons
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-5
              mt-8
              md:mt-9
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
                w-12
                h-12
                rounded-full
                border
                border-purple-500/40
                flex
                items-center
                justify-center
                text-xl
                text-gray-300
                hover:text-white
                hover:border-purple-400
                hover:bg-purple-600/20
                hover:scale-110
                hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
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
                w-12
                h-12
                rounded-full
                border
                border-purple-500/40
                flex
                items-center
                justify-center
                text-xl
                text-gray-300
                hover:text-white
                hover:border-purple-400
                hover:bg-purple-600/20
                hover:scale-110
                hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>


            {/* ================= Codolio ================= */}

            <a
              href="https://codolio.com/profile/mansiy07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio"
              title="Codolio"
              className="
                w-12
                h-12
                rounded-full
                border
                border-purple-500/40
                flex
                items-center
                justify-center
                text-xl
                text-gray-300
                hover:text-white
                hover:border-purple-400
                hover:bg-purple-600/20
                hover:scale-110
                hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                transition-all
                duration-300
              "
            >
              <FaCode />
            </a>

          </div>

        </motion.div>


        {/* =================================================
            RIGHT SIDE - PROFILE IMAGE
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            flex
            justify-center
            lg:justify-end
            mt-4
            lg:mt-0
          "
        >

          {/* ================= Floating Image Wrapper ================= */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >

            {/* ================= Soft Purple Glow ================= */}

            <div
              className="
                absolute
                w-[260px]
                h-[260px]
                sm:w-[320px]
                sm:h-[320px]
                md:w-[380px]
                md:h-[380px]
                lg:w-[450px]
                lg:h-[450px]
                rounded-full
                bg-purple-600/40
                blur-[80px]
                md:blur-[100px]
                animate-pulse
              "
            ></div>


            {/* ================= Profile Image ================= */}

            <img
              src={Profile}
              alt="Mansi Yadav"
              className="
                relative
                z-10
                w-[240px]
                h-[240px]
                sm:w-[300px]
                sm:h-[300px]
                md:w-[350px]
                md:h-[350px]
                lg:w-[410px]
                lg:h-[410px]
                object-cover
                object-center
                rounded-full
                border-4
                border-purple-500
                shadow-[0_0_55px_rgba(168,85,247,0.55)]
                hover:border-fuchsia-400
                hover:shadow-[0_0_80px_rgba(217,70,239,0.6)]
                hover:scale-105
                transition-all
                duration-500
              "
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Hero;
