// =====================================================
// File Name   : About.jsx
// Purpose     : About Section
// Author      : Mansi Yadav
// Description : Full Stack Developer About Section
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
        overflow-hidden
        bg-[#080014]
        text-white
        flex
        items-center
        py-20
        md:py-24
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
          w-[280px]
          h-[280px]
          md:w-[500px]
          md:h-[500px]
          bg-purple-700/15
          rounded-full
          blur-[100px]
          md:blur-[150px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[250px]
          h-[250px]
          md:w-[400px]
          md:h-[400px]
          bg-fuchsia-700/10
          rounded-full
          blur-[100px]
          md:blur-[140px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          top-1/2
          right-0
          w-[250px]
          h-[250px]
          md:w-[350px]
          md:h-[350px]
          bg-violet-700/10
          rounded-full
          blur-[100px]
          md:blur-[130px]
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
          max-w-7xl
          mx-auto
          w-full
          px-5
          sm:px-6
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
          className="text-center mb-10 md:mb-14"
        >

          <p
            className="
              text-purple-400
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              font-semibold
              mb-3
              md:mb-4
            "
          >
            Get To Know Me
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
            About{" "}

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
              Me
            </span>
          </h2>

          {/* Purple Underline */}

          <div
            className="
              w-20
              md:w-24
              h-1
              mx-auto
              mt-5
              md:mt-6
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-500
              to-violet-500
              shadow-[0_0_20px_rgba(168,85,247,0.7)]
            "
          ></div>

        </motion.div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            md:gap-8
            lg:gap-10
            items-stretch
            w-full
          "
        >

          {/* =================================================
              LEFT CARD - ABOUT ME
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              w-full
              rounded-2xl
              md:rounded-3xl
              p-6
              sm:p-7
              md:p-9
              bg-gradient-to-br
              from-purple-950/45
              via-[#12091f]
              to-[#090014]
              border
              border-purple-500/30
              shadow-[0_0_35px_rgba(168,85,247,0.08)]
              hover:border-purple-400/60
              hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]
              transition-all
              duration-500
            "
          >

            {/* Top Purple Glow */}

            <div
              className="
                absolute
                top-0
                left-6
                right-6
                sm:left-10
                sm:right-10
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-fuchsia-500
                to-transparent
              "
            ></div>


            {/* Small Heading */}

            <p
              className="
                text-purple-400
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.25em]
                font-semibold
                mb-4
              "
            >
              Who Am I?
            </p>


            {/* Main Heading */}

            <h3
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                leading-tight
                mb-5
                md:mb-6
              "
            >
              Turning Ideas Into{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  to-fuchsia-400
                  bg-clip-text
                  text-transparent
                "
              >
                Digital Solutions.
              </span>
            </h3>


            {/* Description */}

            <div
              className="
                text-gray-300
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
                <span className="text-white font-semibold">
                  Mansi Yadav
                </span>
                , a B.Tech Computer Science & Engineering student at{" "}
                <span className="text-purple-400 font-medium">
                  Galgotias University
                </span>
                , passionate about building modern and user-focused
                software applications.
              </p>


              <p>
                I am developing my skills as a{" "}
                <span className="text-purple-400 font-medium">
                  Full Stack Developer
                </span>
                , working across both frontend and backend technologies.
                I enjoy creating responsive interfaces with{" "}
                <span className="text-purple-400 font-medium">
                  React, JavaScript, HTML and CSS
                </span>{" "}
                and building backend applications using{" "}
                <span className="text-purple-400 font-medium">
                  Java, Spring Boot, JDBC and REST APIs
                </span>
                .
              </p>


              <p>
                On the database side, I work with{" "}
                <span className="text-purple-400 font-medium">
                  MySQL
                </span>
                , while continuously improving my{" "}
                <span className="text-purple-400 font-medium">
                  Data Structures & Algorithms
                </span>{" "}
                and problem-solving skills.
              </p>


              <p>
                My goal is to become a strong{" "}
                <span className="text-purple-400 font-medium">
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
                gap-2.5
                sm:gap-3
                mt-6
                md:mt-7
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
                    px-3.5
                    sm:px-4
                    py-1.5
                    sm:py-2
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-500/30
                    text-purple-300
                    text-xs
                    sm:text-sm
                    font-medium
                    hover:bg-purple-500/20
                    hover:border-purple-400
                    hover:text-purple-200
                    hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]
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
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              md:gap-5
              w-full
            "
          >

            {/* =================================================
                EDUCATION
            ================================================= */}

            <InfoCard
              icon="🎓"
              title="Education"
              lines={[
                "B.Tech – Computer Science & Engineering",
                "Galgotias University",
                "Currently Pursuing",
              ]}
            />


            {/* =================================================
                FULL STACK
            ================================================= */}

            <InfoCard
              icon="💻"
              title="Full Stack"
              lines={[
                "React & JavaScript",
                "Java & Spring Boot",
                "REST APIs",
              ]}
            />


            {/* =================================================
                DATABASE
            ================================================= */}

            <InfoCard
              icon="🗄️"
              title="Database"
              lines={[
                "MySQL",
                "JDBC",
                "Database Management",
              ]}
            />


            {/* =================================================
                CORE SKILLS
            ================================================= */}

            <InfoCard
              icon="🧠"
              title="Core Skills"
              lines={[
                "Data Structures & Algorithms",
                "OOP",
                "Problem Solving",
              ]}
            />


            {/* =================================================
                DEVELOPMENT
            ================================================= */}

            <InfoCard
              icon="⚙️"
              title="Development"
              lines={[
                "Git & GitHub",
                "Postman",
                "REST API Development",
              ]}
            />


            {/* =================================================
                GOAL
            ================================================= */}

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
        y: -7,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        w-full
        min-h-[155px]
        sm:min-h-[175px]
        rounded-2xl
        p-5
        sm:p-6
        bg-gradient-to-br
        from-purple-950/40
        via-[#130a21]
        to-[#090014]
        border
        border-purple-500/25
        shadow-[0_0_25px_rgba(168,85,247,0.06)]
        hover:border-purple-400/60
        hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
        transition-all
        duration-300
      "
    >

      {/* Small Top Glow */}

      <div
        className="
          absolute
          top-0
          left-6
          right-6
          sm:left-8
          sm:right-8
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-purple-500/70
          to-transparent
        "
      ></div>


      {/* Icon */}

      <div
        className="
          text-3xl
          mb-3
          sm:mb-4
          drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]
        "
      >
        {icon}
      </div>


      {/* Title */}

      <h4
        className="
          text-lg
          sm:text-xl
          font-bold
          text-purple-400
          mb-2
          sm:mb-3
        "
      >
        {title}
      </h4>


      {/* Details */}

      <p
        className="
          text-gray-400
          text-sm
          sm:text-base
          leading-6
          sm:leading-7
        "
      >
        {lines.map((line, index) => (
          <span key={line}>
            {line}

            {index < lines.length - 1 && <br />}
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