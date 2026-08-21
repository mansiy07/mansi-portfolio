// =====================================================
// File Name   : Skills.jsx
// Author      : Mansi Yadav
// Purpose     : Skills Section
// Description : Full Stack Developer Skills Showcase
// =====================================================

import { motion } from "framer-motion";

import {
  FaJava,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiIntellijidea,
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
      description: "Building responsive and interactive user interfaces.",
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
      description: "Developing backend applications and RESTful APIs.",
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
      description: "Working with databases, APIs and development tools.",
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
          name: "IntelliJ IDEA",
          icon: <SiIntellijidea />,
        },
      ],
    },

    {
      title: "Core Skills",
      description: "Strong foundation in programming and problem solving.",
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
        overflow-hidden
        bg-[#080014]
        text-white
        py-20
        sm:py-24
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          w-[300px]
          h-[300px]
          sm:w-[500px]
          sm:h-[500px]
          bg-purple-700/10
          rounded-full
          blur-[120px]
          sm:blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[-100px]
          bottom-0
          w-[300px]
          h-[300px]
          sm:w-[400px]
          sm:h-[400px]
          bg-fuchsia-700/10
          rounded-full
          blur-[110px]
          sm:blur-[140px]
          pointer-events-none
        "
      />

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
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p
            className="
              text-purple-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.3em]
              sm:tracking-[0.35em]
              font-semibold
              mb-3
              sm:mb-4
            "
          >
            What I Work With
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
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
              Skills
            </span>
          </h2>

          {/* Underline */}

          <div
            className="
              w-16
              sm:w-24
              h-1
              mx-auto
              mt-4
              sm:mt-6
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-500
              to-violet-500
              shadow-[0_0_20px_rgba(168,85,247,0.6)]
            "
          />

          <p
            className="
              text-gray-400
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
                y: 35,
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
                rounded-2xl
                sm:rounded-3xl
                p-5
                sm:p-7
                bg-gradient-to-br
                from-purple-950/45
                via-[#130a21]
                to-[#090014]
                border
                border-purple-500/25
                shadow-[0_0_25px_rgba(168,85,247,0.05)]
                hover:border-purple-400/60
                hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]
                transition-all
                duration-300
              "
            >

              {/* ================= Top Glow ================= */}

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
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />


              {/* ================= Category Heading ================= */}

              <div className="mb-5">

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-gray-100
                    group-hover:text-purple-300
                    transition-colors
                    duration-300
                  "
                >
                  {category.title}
                </h3>

                <p
                  className="
                    text-gray-500
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
                      y: -4,
                    }}
                    className="
                      group/skill
                      min-h-[105px]
                      sm:min-h-[120px]
                      rounded-xl
                      sm:rounded-2xl
                      p-4
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      bg-purple-500/5
                      border
                      border-purple-500/20
                      hover:bg-purple-500/10
                      hover:border-purple-400/50
                      transition-all
                      duration-300
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        text-3xl
                        sm:text-4xl
                        text-purple-400
                        group-hover/skill:text-fuchsia-400
                        group-hover/skill:scale-110
                        drop-shadow-[0_0_10px_rgba(168,85,247,0.25)]
                        transition-all
                        duration-300
                      "
                    >
                      {skill.icon}
                    </div>


                    {/* Name */}

                    <h4
                      className="
                        mt-3
                        text-xs
                        sm:text-sm
                        md:text-base
                        font-semibold
                        text-gray-300
                        group-hover/skill:text-purple-300
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
            y: 30,
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
            rounded-2xl
            sm:rounded-3xl
            p-5
            sm:p-6
            text-center
            bg-gradient-to-r
            from-purple-950/50
            via-fuchsia-950/30
            to-violet-950/50
            border
            border-purple-500/20
          "
        >

          <p
            className="
              text-gray-400
              text-sm
              sm:text-base
            "
          >
            <span className="text-purple-300 font-semibold">
              Full Stack Development
            </span>{" "}
            •
            <span className="text-gray-300">
              {" "}Java + Spring Boot + React + MySQL
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