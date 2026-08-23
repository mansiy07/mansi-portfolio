// =====================================================
// File Name   : About.jsx
// Purpose     : About Section
// Author      : Mansi Yadav
// Description : Clean and professional About section
// =====================================================

import { motion } from "framer-motion";

// =====================================================
// About Component
// =====================================================

function About() {
  return (

    <section
      id="about"
      className="
        relative
        min-h-screen
        w-full
        bg-[var(--bg)]
        text-[var(--text)]
        flex
        items-center
        py-20
        md:py-24
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
          max-w-7xl
          mx-auto
          w-full
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
            mb-10
            md:mb-14
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
            Get To Know Me
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
            About Me
          </h2>


          {/* Accent Line */}

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

        </motion.div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
            items-stretch
          "
        >

          {/* =================================================
              LEFT SIDE - ABOUT ME
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-full
              p-6
              sm:p-8
              md:p-9
              rounded-xl
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
              hover:border-[var(--accent-border)]
              transition-all
              duration-300
            "
          >

            {/* ================= Small Heading ================= */}

            <p
              className="
                text-[var(--accent)]
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                font-semibold
                mb-4
              "
            >
              Who Am I?
            </p>


            {/* ================= Main Heading ================= */}

            <h3
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                leading-tight
                text-[var(--text)]
                mb-6
              "
            >
              Turning Ideas Into{" "}

              <span className="text-[var(--accent)]">
                Digital Solutions.
              </span>

            </h3>


            {/* ================= Description ================= */}

            <div
              className="
                text-[var(--text-secondary)]
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                md:leading-8
                space-y-4
              "
            >

              <p>
                Hi, I'm{" "}

                <span
                  className="
                    text-[var(--text)]
                    font-semibold
                  "
                >
                  Mansi Yadav
                </span>

                , a B.Tech Computer Science & Engineering student at{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  Galgotias University
                </span>

                , passionate about building modern and user-focused
                software applications.
              </p>


              <p>
                I am developing my skills as a{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  Full Stack Developer
                </span>

                , working across both frontend and backend technologies.
                I enjoy creating responsive interfaces with{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  React, JavaScript, HTML and CSS
                </span>{" "}

                and building backend applications using{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  Java, Spring Boot, JDBC and REST APIs
                </span>.
              </p>


              <p>
                On the database side, I work with{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  MySQL
                </span>

                , while continuously improving my{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  Data Structures & Algorithms
                </span>{" "}

                and problem-solving skills.
              </p>


              <p>
                My goal is to become a strong{" "}

                <span
                  className="
                    text-[var(--accent)]
                    font-medium
                  "
                >
                  Software Engineer
                </span>{" "}

                by building real-world projects, gaining practical
                experience and continuously learning modern technologies.
              </p>

            </div>


            {/* =================================================
                TECHNOLOGY TAGS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                sm:gap-2.5
                mt-7
              "
            >

              {[
                "Java",
                "Spring Boot",
                "React",
                "JavaScript",
                "REST APIs",
                "MySQL",
                "JDBC",
                "DSA",
              ].map((tag) => (

                <span
                  key={tag}
                  className="
                    px-3
                    py-1.5
                    rounded-md
                    bg-[var(--accent-soft)]
                    border
                    border-[var(--accent-border)]
                    text-[var(--accent)]
                    text-xs
                    sm:text-sm
                    font-medium
                    hover:bg-[var(--accent)]
                    hover:text-[#111111]
                    transition-all
                    duration-300
                  "
                >
                  {tag}
                </span>

              ))}

            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE - ACADEMIC + DEVELOPMENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              md:gap-5
              w-full
            "
          >

            {/* ================= Education ================= */}

            <InfoCard
              icon="🎓"
              title="Education"
              lines={[
                "B.Tech – Computer Science & Engineering",
                "Galgotias University",
                "Currently Pursuing",
              ]}
            />


            {/* ================= Full Stack ================= */}

            <InfoCard
              icon="💻"
              title="Full Stack"
              lines={[
                "React & JavaScript",
                "Java & Spring Boot",
                "REST APIs",
              ]}
            />


            {/* ================= Database ================= */}

            <InfoCard
              icon="🗄️"
              title="Database"
              lines={[
                "MySQL",
                "JDBC",
                "Database Management",
              ]}
            />


            {/* ================= Core Skills ================= */}

            <InfoCard
              icon="🧠"
              title="Core Skills"
              lines={[
                "Data Structures & Algorithms",
                "OOP",
                "Problem Solving",
              ]}
            />


            {/* ================= Development ================= */}

            <InfoCard
              icon="⚙️"
              title="Development"
              lines={[
                "Git & GitHub",
                "Postman",
                "REST API Development",
              ]}
            />


            {/* ================= Career Goal ================= */}

            <InfoCard
              icon="🚀"
              title="Career Goal"
              lines={[
                "Software Engineer",
                "Full Stack Development",
                "Continuous Learning",
              ]}
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}


// =====================================================
// Information Card
// =====================================================

function InfoCard({ icon, title, lines }) {
  return (

    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        w-full
        min-h-[155px]
        sm:min-h-[170px]
        rounded-xl
        p-5
        sm:p-6
        bg-[var(--bg-card)]
        border
        border-[var(--border)]
        hover:border-[var(--accent-border)]
        transition-all
        duration-300
      "
    >

      {/* ================= Icon ================= */}

      <div
        className="
          text-2xl
          sm:text-3xl
          mb-3
        "
      >
        {icon}
      </div>


      {/* ================= Title ================= */}

      <h4
        className="
          text-lg
          sm:text-xl
          font-semibold
          text-[var(--accent)]
          mb-2
        "
      >
        {title}
      </h4>


      {/* ================= Details ================= */}

      <p
        className="
          text-[var(--text-secondary)]
          text-sm
          sm:text-base
          leading-6
          sm:leading-7
        "
      >

        {lines.map((line, index) => (

          <span key={line}>

            {line}

            {index < lines.length - 1 && (
              <br />
            )}

          </span>

        ))}

      </p>

    </motion.div>
  );
}


// =====================================================
// Export
// =====================================================

export default About;