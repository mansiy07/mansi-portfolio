// =====================================================
// File Name   : Projects.jsx
// Purpose     : Projects Section
// Author      : Mansi Yadav
// =====================================================

// ================= Imports =================

import { motion } from "framer-motion";

import {
  FaGithub,
  FaJava,
  FaDatabase,
  FaCode,
  FaServer,
  FaReact,
} from "react-icons/fa";

// =====================================================
// Projects Component
// =====================================================

function Projects() {

  // ================= Projects Data =================

  const projects = [
    {
      title: "SehatAI",

      description:
        "A full-stack healthcare platform designed to provide accessible digital health support through a modern frontend and a Java-based backend.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Spring Boot",
          icon: <FaServer />,
        },
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "MySQL",
          icon: <FaDatabase />,
        },
        {
          name: "REST APIs",
          icon: <FaCode />,
        },
      ],

      github: "https://github.com/mansiy07/SehatAI",
    },

    {
      title: "Web Scientific Calculator",

      description:
        "A web-based scientific calculator built using Java, JSP and Servlets with support for mathematical operations, error handling and calculation history.",

      technologies: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "JSP",
          icon: <FaCode />,
        },
        {
          name: "Servlets",
          icon: <FaServer />,
        },
        {
          name: "HTML",
          icon: <FaCode />,
        },
      ],

      github:
        "https://github.com/mansiy07/Web-Scientific-Calculator-Project",
    },

    {
      title: "Smart ChatBot",

      description:
        "A Core Java chatbot application that handles greetings, date, time and basic user queries while demonstrating object-oriented programming concepts.",

      technologies: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "OOP",
          icon: <FaCode />,
        },
      ],

      github: "https://github.com/mansiy07/Smart-ChatBot-",
    },
  ];

  // =====================================================
  // Return
  // =====================================================

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#080014]
        text-white
        py-24
      "
    >

      {/* =================================================
          PURPLE BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-purple-700/10
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          right-0
          bottom-0
          w-[400px]
          h-[400px]
          bg-fuchsia-700/10
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      ></div>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
        "
      >

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p
            className="
              text-purple-400
              text-sm
              uppercase
              tracking-[0.35em]
              font-semibold
              mb-4
            "
          >
            What I've Built
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-extrabold
            "
          >
            My{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-fuchsia-400
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h2>

          {/* Purple underline */}

          <div
            className="
              w-24
              h-1
              mx-auto
              mt-6
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-500
              to-violet-500
              shadow-[0_0_20px_rgba(168,85,247,0.6)]
            "
          ></div>

          <p
            className="
              text-gray-400
              mt-6
              text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-8
            "
          >
            A selection of projects where I have applied my
            programming, full-stack development and problem-solving skills.
          </p>

        </motion.div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            mt-14
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-7
          "
        >

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                flex
                flex-col
                min-h-[420px]
                p-7
                rounded-2xl
                bg-gradient-to-br
                from-purple-950/40
                via-[#130a21]
                to-[#090014]
                border
                border-purple-500/25
                shadow-[0_0_25px_rgba(168,85,247,0.05)]
                hover:border-purple-400/60
                hover:shadow-[0_0_35px_rgba(168,85,247,0.16)]
                transition-all
                duration-300
              "
            >

              {/* ================= Top Line ================= */}

              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-purple-500/70
                  to-transparent
                "
              ></div>


              {/* ================= Project Number ================= */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-purple-400
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                  "
                >
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>


                {/* GitHub Icon */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="
                    text-2xl
                    text-gray-400
                    hover:text-purple-400
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                </a>

              </div>


              {/* ================= Project Title ================= */}

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-7
                  text-gray-100
                  group-hover:text-purple-300
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h3>


              {/* ================= Description ================= */}

              <p
                className="
                  text-gray-400
                  leading-7
                  mt-4
                "
              >
                {project.description}
              </p>


              {/* ================= Technologies ================= */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2.5
                  mt-6
                "
              >

                {project.technologies.map((technology) => (

                  <span
                    key={technology.name}
                    className="
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      bg-purple-500/5
                      border
                      border-purple-500/20
                      text-gray-300
                      text-sm
                    "
                  >

                    <span className="text-purple-400">
                      {technology.icon}
                    </span>

                    {technology.name}

                  </span>

                ))}

              </div>


              {/* ================= GitHub Button ================= */}

              <div className="mt-auto pt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    rounded-xl
                    border
                    border-purple-500/60
                    text-purple-300
                    font-semibold
                    hover:bg-purple-600
                    hover:text-white
                    hover:border-purple-400
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />

                  View on GitHub
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Projects;