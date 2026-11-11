
// =====================================================
// File Name   : Skills.jsx
// Purpose     : Skills Section
// Author      : Mansi Yadav
// Description : Clean and professional skills showcase
// =====================================================

import { motion } from "framer-motion";

import {
  FaJava,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
} from "react-icons/si";


// =====================================================
// Skills Component
// =====================================================

function Skills() {

  // =====================================================
  // Skills Data
  // =====================================================

  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces.",

      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
      ],
    },

    {
      title: "Backend Development",
      description:
        "Developing backend applications and RESTful APIs.",

      skills: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
        },
        {
          name: "JDBC",
          icon: "☕",
        },
      ],
    },

    {
      title: "Database & Tools",
      description:
        "Working with databases, APIs and development tools.",

      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "Postman",
          icon: <SiPostman />,
        },
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "VS Code",
          icon: <FaCode />,
        },
        {
          name: "Eclipse",
          icon: <FaCode />,
        },
      ],
    },

    {
      title: "Core Skills",
      description:
        "Strong foundation in programming and problem solving.",

      skills: [
        {
          name: "OOP",
          icon: "◈",
        },
        {
          name: "DSA",
          icon: "⌘",
        },
        {
          name: "Problem Solving",
          icon: "🧩",
        },
        {
          name: "REST APIs",
          icon: "⚡",
        },
      ],
    },
  ];


  // =====================================================
  // Return
  // =====================================================

  return (

    <section
      id="skills"
      className="
        relative
        min-h-screen
        w-full
        bg-[var(--bg)]
        text-[var(--text)]
        py-20
        sm:py-24
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
            SECTION HEADING
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
          className="
            text-center
          "
        >

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
            What I Work With
          </p>


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
            My Skills
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
              px-2
            "
          >
            A growing technical skill set focused on building
            modern, scalable and user-friendly software applications.
          </p>

        </motion.div>


        {/* =================================================
            SKILL CATEGORIES
        ================================================= */}

        <div
          className="
            mt-10
            sm:mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            lg:gap-6
          "
        >

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 25,
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
                delay: categoryIndex * 0.08,
              }}
              className="
                group
                relative
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-7
                bg-[var(--bg-card)]
                border
                border-[var(--border)]
                hover:border-[var(--accent-border)]
                transition-all
                duration-300
              "
            >

              {/* ================= Category Heading ================= */}

              <div className="mb-5">

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-[var(--text)]
                    group-hover:text-[var(--accent)]
                    transition-colors
                    duration-300
                  "
                >
                  {category.title}
                </h3>


                <p
                  className="
                    text-[var(--text-secondary)]
                    text-sm
                    sm:text-base
                    mt-2
                    leading-6
                  "
                >
                  {category.description}
                </p>

              </div>


              {/* ================= Skills ================= */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-3
                  sm:gap-4
                "
              >

                {category.skills.map((skill) => (

                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      group/skill
                      min-h-[105px]
                      sm:min-h-[120px]
                      rounded-lg
                      sm:rounded-xl
                      p-4
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      bg-[var(--accent-soft)]
                      border
                      border-[var(--border)]
                      hover:border-[var(--accent-border)]
                      hover:bg-[var(--bg-secondary)]
                      transition-all
                      duration-300
                    "
                  >

                    {/* ================= Icon ================= */}

                    <div
                      className="
                        text-3xl
                        sm:text-4xl
                        text-[var(--accent)]
                        group-hover/skill:scale-105
                        transition-transform
                        duration-300
                      "
                    >
                      {skill.icon}
                    </div>


                    {/* ================= Name ================= */}

                    <h4
                      className="
                        mt-3
                        text-xs
                        sm:text-sm
                        md:text-base
                        font-semibold
                        text-[var(--text-secondary)]
                        group-hover/skill:text-[var(--accent)]
                        transition-colors
                        duration-300
                      "
                    >
                      {skill.name}
                    </h4>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            FULL STACK HIGHLIGHT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="
            mt-6
            rounded-xl
            sm:rounded-2xl
            p-5
            sm:p-6
            text-center
            bg-[var(--bg-card)]
            border
            border-[var(--accent-border)]
          "
        >

          <p
            className="
              text-[var(--text-secondary)]
              text-sm
              sm:text-base
            "
          >

            <span
              className="
                text-[var(--accent)]
                font-semibold
              "
            >
              Full Stack Development
            </span>

            {" • "}

            <span className="text-[var(--text)]">
              Java + Spring Boot + React + MySQL
            </span>

          </p>

        </motion.div>

      </div>

    </section>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Skills;
