// =====================================================
// File Name   : Experience.jsx
// Purpose     : Experience & Internship Section
// Author      : Mansi Yadav
// =====================================================

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaChartBar,
  FaPython,
  FaDatabase,
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";

// =====================================================
// Experience Component
// =====================================================

function Experience() {

  // ================= Experience Data =================

  const experiences = [
    {
      type: "INTERNSHIP",
      title: "Data Analytics Intern",
      company: "Edunet Foundation",
      program: "AICTE • VOIS for Tech Program",
      duration: "Aug 2026 – Sep 2026",
      icon: <FaBriefcase />,

      description:
        "Selected for a 4-week Data Analytics internship through the VOIS for Tech Program, working on practical data analysis tasks and a project under mentor guidance.",

      points: [
        "Performed hands-on HR data analysis using Python.",
        "Worked on agriculture data analysis and dataset reporting.",
        "Analyzed business and operations datasets.",
        "Prepared reports using data analysis and LLM-assisted workflows.",
        "Worked on data visualization and project-based learning.",
      ],

      skills: [
        "Data Analytics",
        "Python",
        "Data Visualization",
        "Dataset Analysis",
        "LLMs",
      ],

      badge: "AICTE Internship",
    },

    {
      type: "ACADEMIC INTERNSHIP",
      title: "Data Analytics with AI",
      company: "IBM SkillsBuild • BharatCares",
      program: "AICTE | IBM SkillsBuild",
      duration: "Completed • 20 Aug 2026",
      icon: <FaChartBar />,

      description:
        "Completed an academic internship focused on Data Analytics with AI through the IBM SkillsBuild learning platform.",

      points: [
        "Completed the IBM SkillsBuild Data Analytics with AI academic internship.",
        "Built foundational understanding of data analytics and AI concepts.",
        "Earned an AICTE | IBM SkillsBuild Academic Internship completion certificate.",
        "Strengthened practical and industry-oriented data analytics skills.",
      ],

      skills: [
        "Data Analytics",
        "Artificial Intelligence",
        "IBM SkillsBuild",
        "Data Analysis",
      ],

      badge: "Completed",
      link:
        "https://skills.yourlearning.ibm.com/activity/PLAN-D44A9C2C463C",
    },
  ];

  // =====================================================
  // Return
  // =====================================================

  return (
    <section
      id="experience"
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
          Background Glow
      ================================================= */}

      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[550px]
          h-[550px]
          bg-purple-700/10
          rounded-full
          blur-[160px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          right-0
          bottom-0
          w-[450px]
          h-[450px]
          bg-fuchsia-700/10
          rounded-full
          blur-[150px]
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
          px-6
          lg:px-12
        "
      >

        {/* =================================================
            Section Heading
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
            My Journey
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-extrabold
            "
          >
            Experience{" "}

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
              & Learning
            </span>
          </h2>

          {/* Underline */}

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
            My internship experience, practical learning and journey
            toward becoming a skilled software developer.
          </p>

        </motion.div>


        {/* =================================================
            Experience Timeline
        ================================================= */}

        <div className="relative mt-16">

          {/* Timeline Line */}

          <div
            className="
              absolute
              hidden
              md:block
              left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-purple-500/0
              via-purple-500/50
              to-purple-500/0
              -translate-x-1/2
            "
          ></div>


          {/* Experience Cards */}

          <div className="space-y-12">

            {experiences.map((experience, index) => (

              <motion.div
                key={experience.company}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`
                  relative
                  flex
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    hidden
                    md:flex
                    left-1/2
                    top-10
                    -translate-x-1/2
                    w-5
                    h-5
                    rounded-full
                    bg-purple-500
                    border-4
                    border-[#080014]
                    shadow-[0_0_20px_rgba(168,85,247,0.9)]
                    z-20
                  "
                ></div>


                {/* Card */}

                <div
                  className="
                    group
                    relative
                    w-full
                    md:w-[46%]
                    rounded-2xl
                    p-7
                    md:p-8
                    bg-gradient-to-br
                    from-purple-950/50
                    via-[#130a21]
                    to-[#090014]
                    border
                    border-purple-500/25
                    shadow-[0_0_25px_rgba(168,85,247,0.05)]
                    hover:border-purple-400/60
                    hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
                    transition-all
                    duration-300
                  "
                >

                  {/* Top Glow */}

                  <div
                    className="
                      absolute
                      top-0
                      left-8
                      right-8
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-purple-500
                      to-transparent
                      opacity-60
                    "
                  ></div>


                  {/* Header */}

                  <div className="flex items-start gap-5">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-14
                        h-14
                        shrink-0
                        rounded-xl
                        bg-purple-900/40
                        border
                        border-purple-500/30
                        text-purple-400
                        text-xl
                        group-hover:text-fuchsia-400
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      {experience.icon}
                    </div>


                    {/* Title */}

                    <div className="flex-1">

                      <p
                        className="
                          text-purple-400
                          text-xs
                          font-bold
                          tracking-[0.2em]
                          uppercase
                        "
                      >
                        {experience.type}
                      </p>

                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-bold
                          text-white
                          mt-1
                        "
                      >
                        {experience.title}
                      </h3>

                      <p
                        className="
                          text-purple-300
                          font-medium
                          mt-1
                        "
                      >
                        {experience.company}
                      </p>

                    </div>

                  </div>


                  {/* Duration */}

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      px-4
                      py-1.5
                      rounded-full
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-purple-300
                      text-sm
                    "
                  >
                    {experience.duration}
                  </div>


                  {/* Program */}

                  <p
                    className="
                      mt-5
                      text-gray-300
                      font-medium
                    "
                  >
                    {experience.program}
                  </p>


                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-gray-400
                      leading-7
                    "
                  >
                    {experience.description}
                  </p>


                  {/* Responsibilities */}

                  <div className="mt-6">

                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-purple-300
                        uppercase
                        tracking-wider
                        mb-3
                      "
                    >
                      Key Highlights
                    </h4>

                    <ul className="space-y-2.5">

                      {experience.points.map((point) => (

                        <li
                          key={point}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            text-gray-400
                            leading-6
                          "
                        >

                          <span
                            className="
                              mt-2
                              w-1.5
                              h-1.5
                              shrink-0
                              rounded-full
                              bg-purple-400
                            "
                          ></span>

                          <span>{point}</span>

                        </li>

                      ))}

                    </ul>

                  </div>


                  {/* Skills */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {experience.skills.map((skill) => (

                      <span
                        key={skill}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-medium
                          text-purple-300
                          bg-purple-500/10
                          border
                          border-purple-500/25
                          hover:bg-purple-500/20
                          transition
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>


                  {/* IBM Link */}

                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-6
                        text-sm
                        font-semibold
                        text-purple-400
                        hover:text-fuchsia-400
                        transition-colors
                      "
                    >
                      View IBM SkillsBuild
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}


                  {/* Badge */}

                  <div
                    className="
                      absolute
                      top-6
                      right-6
                      hidden
                      sm:flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-purple-300
                    "
                  >
                    <FaAward />
                    {experience.badge}
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

// =====================================================
// Export Component
// =====================================================

export default Experience;