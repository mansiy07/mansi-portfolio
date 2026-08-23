// =====================================================
// File Name   : Hero.jsx
// Purpose     : Hero Section
// Author      : Mansi Yadav
// Description : Clean and professional portfolio intro
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

    // =================================================
    // Hero Section
    // =================================================

    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--text)]
        flex
        items-center
        pt-28
        pb-16
        transition-colors
        duration-300
      "
    >

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
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            w-full
            text-center
            lg:text-left
          "
        >

          {/* ================= Greeting ================= */}

          <p
            className="
              text-[var(--accent)]
              text-sm
              sm:text-base
              font-medium
              tracking-wide
              mb-4
            "
          >
            Hello, I'm
          </p>


          {/* ================= Name ================= */}

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              tracking-tight
              text-[var(--text)]
            "
          >
            Mansi Yadav
          </h1>


          {/* ================= Accent Line ================= */}

          <div
            className="
              w-14
              h-[3px]
              bg-[var(--accent)]
              rounded-full
              mt-5
              mb-5
              mx-auto
              lg:mx-0
            "
          />


          {/* ================= Typing Animation ================= */}

          <div
            className="
              min-h-[38px]
              sm:min-h-[44px]
            "
          >

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,

                "Java Developer",
                2000,

                "Backend Developer",
                2000,

                "Software Developer",
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
                text-[var(--accent)]
                leading-relaxed
              "
            />

          </div>


          {/* ================= Main Description ================= */}

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-[var(--text-secondary)]
              mt-6
              leading-7
              md:leading-8
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            B.Tech Computer Science & Engineering student at{" "}

            <span
              className="
                text-[var(--text)]
                font-medium
              "
            >
              Galgotias University
            </span>

            , passionate about building modern and scalable
            applications using{" "}

            <span className="text-[var(--accent)]">
              Java, Spring Boot, React, REST APIs and MySQL.
            </span>
          </p>


          {/* ================= Second Description ================= */}

          <p
            className="
              text-sm
              sm:text-base
              text-[var(--text-secondary)]
              mt-4
              leading-7
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            I enjoy solving problems, developing real-world projects,
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
              mt-8
            "
          >

            {/* ================= View Projects ================= */}

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                rounded-md
                bg-[var(--accent)]
                text-[#111111]
                font-semibold
                border
                border-[var(--accent)]
                hover:bg-[var(--accent-hover)]
                hover:border-[var(--accent-hover)]
                transition-all
                duration-300
                w-full
                sm:w-auto
              "
            >
              View Projects

              <FaArrowRight className="text-sm" />

            </a>


            {/* ================= Resume ================= */}

            <a
              href={resume}
              download="Mansi_Yadav_Resume.pdf"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                rounded-md
                border
                border-[var(--accent-border)]
                text-[var(--accent)]
                font-semibold
                hover:bg-[var(--accent-soft)]
                hover:border-[var(--accent)]
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
              gap-4
              mt-7
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
                rounded-md
                border
                border-[var(--border)]
                flex
                items-center
                justify-center
                text-lg
                text-[var(--text-secondary)]
                hover:text-[var(--accent)]
                hover:border-[var(--accent-border)]
                hover:bg-[var(--accent-soft)]
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
                rounded-md
                border
                border-[var(--border)]
                flex
                items-center
                justify-center
                text-lg
                text-[var(--text-secondary)]
                hover:text-[var(--accent)]
                hover:border-[var(--accent-border)]
                hover:bg-[var(--accent-soft)]
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
                w-10
                h-10
                rounded-md
                border
                border-[var(--border)]
                flex
                items-center
                justify-center
                text-lg
                text-[var(--text-secondary)]
                hover:text-[var(--accent)]
                hover:border-[var(--accent-border)]
                hover:bg-[var(--accent-soft)]
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
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            w-full
            flex
            justify-center
            lg:justify-end
            mt-4
            lg:mt-0
          "
        >

          {/* ================= Image Container ================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-center
            "
          >

            {/* ================= Simple Outer Circle ================= */}

            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                sm:w-[340px]
                sm:h-[340px]
                md:w-[390px]
                md:h-[390px]
                lg:w-[430px]
                lg:h-[430px]
                rounded-full
                border
                border-[var(--accent-border)]
              "
            />


            {/* ================= Profile Image ================= */}

            <img
              src={Profile}
              alt="Mansi Yadav"
              className="
                relative
                z-10
                w-[250px]
                h-[250px]
                sm:w-[300px]
                sm:h-[300px]
                md:w-[350px]
                md:h-[350px]
                lg:w-[390px]
                lg:h-[390px]
                object-cover
                object-center
                rounded-full
                border
                border-[var(--accent-border)]
                bg-[var(--bg-card)]
                hover:border-[var(--accent)]
                transition-all
                duration-300
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Hero;