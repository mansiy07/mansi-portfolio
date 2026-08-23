// =====================================================
// File Name   : Projects.jsx
// Purpose     : Projects Section
// Author      : Mansi Yadav
// Description : Clean and professional project showcase
// =====================================================

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

  // =====================================================
  // Projects Data
  // =====================================================

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

      github:
        "https://github.com/mansiy07/Smart-ChatBot-",
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
        bg-[var(--bg)]
        text-[var(--text)]
        pt-28
        pb-20
        sm:pt-32
        sm:pb-24
        transition-colors
        duration-300
      "
    >

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
          px-5
          sm:px-6
          lg:px-12
        "
      >

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          {/* ================= Small Heading ================= */}

          <p
            className="
              text-[var(--accent)]
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              font-semibold
              mb-3
            "
          >
            What I've Built
          </p>


          {/* ================= Main Heading ================= */}

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-[var(--text)]
            "
          >
            My Projects
          </h2>


          {/* ================= Accent Line ================= */}

          <div
            className="
              w-14
              h-[3px]
              mx-auto
              mt-5
              rounded-full
              bg-[var(--accent)]
            "
          />


          {/* ================= Description ================= */}

          <p
            className="
              text-[var(--text-secondary)]
              mt-5
              sm:mt-6
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-7
              sm:leading-8
            "
          >
            A selection of projects where I have applied my
            programming, full-stack development and problem-solving
            skills.
          </p>

        </motion.div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            mt-10
            sm:mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            lg:gap-6
          "
        >

          {projects.map((project, index) => (

            <motion.article
              key={project.title}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -5,
              }}

              className="
                group
                relative
                flex
                flex-col
                min-h-[400px]
                p-5
                sm:p-7
                rounded-xl
                sm:rounded-2xl
                bg-[var(--bg-card)]
                border
                border-[var(--border)]
                hover:border-[var(--accent-border)]
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  Project Number + GitHub
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                {/* Project Number */}

                <span
                  className="
                    text-[var(--accent)]
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
                  title="View GitHub Repository"
                  className="
                    text-xl
                    sm:text-2xl
                    text-[var(--text-secondary)]
                    hover:text-[var(--accent)]
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                </a>

              </div>


              {/* =================================================
                  Project Title
              ================================================= */}

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-6
                  text-[var(--text)]
                  group-hover:text-[var(--accent)]
                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h3>


              {/* =================================================
                  Description
              ================================================= */}

              <p
                className="
                  text-[var(--text-secondary)]
                  text-sm
                  sm:text-base
                  leading-7
                  mt-4
                "
              >
                {project.description}
              </p>


              {/* =================================================
                  Technologies
              ================================================= */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
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
                      rounded-md
                      bg-[var(--accent-soft)]
                      border
                      border-[var(--border)]
                      text-[var(--text-secondary)]
                      text-xs
                      sm:text-sm
                      hover:border-[var(--accent-border)]
                      hover:text-[var(--accent)]
                      transition-all
                      duration-300
                    "
                  >

                    <span className="text-[var(--accent)]">
                      {technology.icon}
                    </span>

                    {technology.name}

                  </span>

                ))}

              </div>


              {/* =================================================
                  GitHub Button
              ================================================= */}

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
                    rounded-md
                    border
                    border-[var(--accent-border)]
                    text-[var(--accent)]
                    font-semibold
                    text-sm
                    hover:bg-[var(--accent)]
                    hover:text-[#111111]
                    hover:border-[var(--accent)]
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