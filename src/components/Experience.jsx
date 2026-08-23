// =====================================================
// File Name   : Experience.jsx
// Purpose     : Experience & Internship Section
// Author      : Mansi Yadav
// Description : Clean professional experience timeline
// =====================================================

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaChartBar,
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";


// =====================================================
// Experience Component
// =====================================================

function Experience() {

  // =====================================================
  // Experience Data
  // =====================================================

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
            My Journey
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
            Experience & Learning
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
            My internship experience, practical learning and journey
            toward becoming a skilled software developer.
          </p>

        </motion.div>


        {/* =================================================
            EXPERIENCE TIMELINE
        ================================================= */}

        <div className="relative mt-12 sm:mt-16">

          {/* ================= Timeline Line ================= */}

          <div
            className="
              absolute
              hidden
              md:block
              left-1/2
              top-0
              bottom-0
              w-px
              bg-[var(--accent-border)]
              -translate-x-1/2
            "
          />


          {/* ================= Experience Cards ================= */}

          <div className="space-y-10 sm:space-y-12">

            {experiences.map((experience, index) => (

              <motion.div
                key={experience.company}

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
                  duration: 0.55,
                  delay: index * 0.12,
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

                {/* =================================================
                    Timeline Dot
                ================================================= */}

                <div
                  className="
                    absolute
                    hidden
                    md:flex
                    left-1/2
                    top-10
                    -translate-x-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-[var(--accent)]
                    border-4
                    border-[var(--bg)]
                    z-20
                  "
                />


                {/* =================================================
                    Experience Card
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    w-full
                    md:w-[46%]
                    rounded-xl
                    sm:rounded-2xl
                    p-5
                    sm:p-7
                    md:p-8
                    bg-[var(--bg-card)]
                    border
                    border-[var(--border)]
                    hover:border-[var(--accent-border)]
                    transition-all
                    duration-300
                  "
                >

                  {/* =================================================
                      Header
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      sm:gap-5
                    "
                  >

                    {/* ================= Icon ================= */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        sm:w-14
                        sm:h-14
                        shrink-0
                        rounded-lg
                        sm:rounded-xl
                        bg-[var(--accent-soft)]
                        border
                        border-[var(--accent-border)]
                        text-[var(--accent)]
                        text-lg
                        sm:text-xl
                        group-hover:scale-105
                        transition-transform
                        duration-300
                      "
                    >
                      {experience.icon}
                    </div>


                    {/* ================= Title ================= */}

                    <div className="flex-1">

                      <p
                        className="
                          text-[var(--accent)]
                          text-[10px]
                          sm:text-xs
                          font-bold
                          tracking-[0.15em]
                          sm:tracking-[0.2em]
                          uppercase
                        "
                      >
                        {experience.type}
                      </p>


                      <h3
                        className="
                          text-lg
                          sm:text-xl
                          md:text-2xl
                          font-bold
                          text-[var(--text)]
                          mt-1
                        "
                      >
                        {experience.title}
                      </h3>


                      <p
                        className="
                          text-[var(--accent)]
                          text-sm
                          sm:text-base
                          font-medium
                          mt-1
                        "
                      >
                        {experience.company}
                      </p>

                    </div>

                  </div>


                  {/* =================================================
                      Duration
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      px-3
                      sm:px-4
                      py-1.5
                      rounded-full
                      bg-[var(--accent-soft)]
                      border
                      border-[var(--accent-border)]
                      text-[var(--accent)]
                      text-xs
                      sm:text-sm
                    "
                  >
                    {experience.duration}
                  </div>


                  {/* =================================================
                      Program
                  ================================================= */}

                  <p
                    className="
                      mt-5
                      text-[var(--text)]
                      font-medium
                      text-sm
                      sm:text-base
                    "
                  >
                    {experience.program}
                  </p>


                  {/* =================================================
                      Description
                  ================================================= */}

                  <p
                    className="
                      mt-4
                      text-[var(--text-secondary)]
                      text-sm
                      sm:text-base
                      leading-7
                    "
                  >
                    {experience.description}
                  </p>


                  {/* =================================================
                      Key Highlights
                  ================================================= */}

                  <div className="mt-6">

                    <h4
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-[var(--accent)]
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
                            text-xs
                            sm:text-sm
                            text-[var(--text-secondary)]
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
                              bg-[var(--accent)]
                            "
                          />

                          <span>
                            {point}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>


                  {/* =================================================
                      Skills
                  ================================================= */}

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
                          text-[10px]
                          sm:text-xs
                          font-medium
                          text-[var(--accent)]
                          bg-[var(--accent-soft)]
                          border
                          border-[var(--accent-border)]
                          hover:bg-[var(--accent)]
                          hover:text-[#111111]
                          transition-all
                          duration-300
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>


                  {/* =================================================
                      IBM SkillsBuild Link
                  ================================================= */}

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
                        text-[var(--accent)]
                        hover:text-[var(--accent-hover)]
                        transition-colors
                        duration-300
                      "
                    >

                      View IBM SkillsBuild

                      <FaExternalLinkAlt
                        className="text-xs"
                      />

                    </a>

                  )}


                  {/* =================================================
                      Badge
                  ================================================= */}

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
                      text-[var(--accent)]
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