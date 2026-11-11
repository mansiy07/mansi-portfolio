
import { motion } from "framer-motion";

import {
  FaGithub,
  FaJava,
  FaDatabase,
  FaCode,
  FaServer,
  FaReact,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "MediMind",
      subtitle: "Smart Rural Healthcare Assistant",

      description:
        "Addressed limited access to reliable healthcare information and guidance in rural communities. Implemented healthcare assistance features and connected frontend services with backend APIs. Created a centralized platform to make essential healthcare information more accessible to users.",

      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Vite", icon: <FaCode /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <FaServer /> },
        { name: "Spring Security", icon: <FaServer /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "JWT", icon: <FaCode /> },
      ],

      github: "https://github.com/mansiy07/MediMind",
    },

    {
      title: "FraudLensAI",
      subtitle: "Payment Risk & Fraud Intelligence Platform",

      description:
        "Addressed the challenge of detecting suspicious payment activity and identifying potential fraud. Implemented transaction monitoring, risk scoring, authentication, dynamic alerts, and audit logging. Delivered an interactive dashboard for tracking transactions and highlighting potential security risks.",

      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <FaCode /> },
        { name: "Node.js", icon: <FaServer /> },
        { name: "Express.js", icon: <FaServer /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "Mongoose", icon: <FaDatabase /> },
        { name: "JWT", icon: <FaCode /> },
        { name: "bcryptjs", icon: <FaCode /> },
      ],

      github: "https://github.com/mansiy07/FraudLensAI",
    },

    {
      title: "TourX",
      subtitle: "Blockchain-Based Smart Tourist Safety",

      description:
        "Focused on enhancing tourist safety through AI-powered monitoring and blockchain-based data integrity. Developing geofencing, live location monitoring, emergency SOS alerts, and AI-based anomaly detection. Uses blockchain verification records to maintain the integrity and traceability of important safety events, while sensitive data remains securely stored off-chain.",

      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Vite", icon: <FaCode /> },
        { name: "Tailwind CSS", icon: <FaCode /> },
        { name: "Spring Boot", icon: <FaServer /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Blockchain", icon: <FaDatabase /> },
        { name: "Python", icon: <FaCode /> },
        { name: "FastAPI", icon: <FaServer /> },
        { name: "OpenAI API", icon: <FaCode /> },
      ],

      github: "https://github.com/mansiy07/TourX",
    },
  ];

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
      {/* Main Container */}
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
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
            What I've Built
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
            My Projects
          </h2>

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
            programming, full-stack development and
            problem-solving skills.
          </p>
        </motion.div>

        {/* Project Grid */}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
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
              {/* Project Number + GitHub */}
              <div className="flex items-center justify-between">
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

              {/* Project Title */}
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

              {/* Project Subtitle */}
              <p
                className="
                  text-[var(--accent)]
                  text-sm
                  font-medium
                  mt-2
                "
              >
                {project.subtitle}
              </p>

              {/* Description */}
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

              {/* Technologies */}
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

              {/* GitHub Button */}
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

export default Projects;
