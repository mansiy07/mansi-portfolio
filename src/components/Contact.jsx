// =====================================================
// File Name   : Contact.jsx
// Purpose     : Contact Section
// Author      : Mansi Yadav
// Description : Clean professional contact section
// =====================================================

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";


// =====================================================
// EmailJS Configuration
// =====================================================

const SERVICE_ID = "service_6rfvv4k";

const TEMPLATE_ID = "template_498sq7e";

const PUBLIC_KEY = "Xm2vjOjzXR-yOJ3jd";


// =====================================================
// Contact Component
// =====================================================

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState("");


  // =====================================================
  // Handle Input Change
  // =====================================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // =====================================================
  // Handle Form Submit
  // =====================================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    // ================= Validation =================

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {

      setStatus("Please fill all the fields.");

      return;
    }


    setSending(true);

    setStatus("");


    try {

      // ================= Send Email =================

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,

          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );


      // ================= Success =================

      setStatus(
        "Message sent successfully! Thank you for reaching out."
      );


      // ================= Clear Form =================

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error("EmailJS Error:", error);

      setStatus(
        "Failed to send message. Please try again."
      );

    } finally {

      setSending(false);

    }
  };


  // =====================================================
  // Return
  // =====================================================

  return (

    <section
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        bg-[var(--bg)]
        text-[var(--text)]
        flex
        items-center
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
            Let's Connect
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
            Get In Touch
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


          <p
            className="
              text-[var(--text-secondary)]
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
              mt-5
              leading-7
              sm:leading-8
            "
          >
            I'm always open to discussing software development,
            projects, internships and new opportunities.
          </p>

        </motion.div>


        {/* =================================================
            CONTACT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            lg:gap-8
            mt-10
            sm:mt-14
          "
        >

          {/* =================================================
              CONTACT INFORMATION
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
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
              rounded-xl
              sm:rounded-2xl
              p-6
              sm:p-8
              md:p-10
              hover:border-[var(--accent-border)]
              transition-all
              duration-300
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--text)]
              "
            >
              Let's Connect
            </h3>


            <p
              className="
                text-[var(--text-secondary)]
                mt-3
                leading-7
                text-sm
                sm:text-base
              "
            >
              Feel free to reach out to me for collaboration,
              internships, projects or any software development
              opportunities.
            </p>


            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href="mailto:mansiyadav2807@gmail.com"
              className="
                flex
                items-center
                gap-4
                mt-8
                group
              "
            >

              <div
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  shrink-0
                  rounded-lg
                  sm:rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-[var(--accent-border)]
                  bg-[var(--accent-soft)]
                  text-[var(--accent)]
                  text-lg
                  sm:text-xl
                  group-hover:bg-[var(--accent)]
                  group-hover:text-[#111111]
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope />
              </div>


              <div>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-[var(--text-muted)]
                  "
                >
                  Email
                </p>

                <p
                  className="
                    text-sm
                    sm:text-base
                    text-[var(--text)]
                    group-hover:text-[var(--accent)]
                    transition-colors
                  "
                >
                  mansiyadav2807@gmail.com
                </p>

              </div>

            </a>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-3
                sm:gap-4
                mt-8
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
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-lg
                  sm:rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-[var(--border)]
                  text-[var(--text-secondary)]
                  text-lg
                  sm:text-xl
                  hover:text-[var(--accent)]
                  hover:border-[var(--accent-border)]
                  hover:bg-[var(--accent-soft)]
                  hover:-translate-y-1
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
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-lg
                  sm:rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-[var(--border)]
                  text-[var(--text-secondary)]
                  text-lg
                  sm:text-xl
                  hover:text-[var(--accent)]
                  hover:border-[var(--accent-border)]
                  hover:bg-[var(--accent-soft)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>


          {/* =================================================
              CONTACT FORM
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
              bg-[var(--bg-card)]
              border
              border-[var(--border)]
              rounded-xl
              sm:rounded-2xl
              p-6
              sm:p-8
              md:p-10
              hover:border-[var(--accent-border)]
              transition-all
              duration-300
            "
          >

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--text)]
              "
            >
              Send Me a Message
            </h3>


            <form onSubmit={handleSubmit}>


              {/* =================================================
                  NAME
              ================================================= */}

              <div className="mt-6">

                <label
                  className="
                    block
                    text-sm
                    text-[var(--text-secondary)]
                    mb-2
                  "
                >
                  Name
                </label>


                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    bg-[var(--bg)]
                    border
                    border-[var(--border)]
                    rounded-lg
                    px-4
                    py-3
                    text-[var(--text)]
                    placeholder:text-[var(--text-muted)]
                    outline-none
                    focus:border-[var(--accent)]
                    transition-all
                    duration-300
                  "
                />

              </div>


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="mt-5">

                <label
                  className="
                    block
                    text-sm
                    text-[var(--text-secondary)]
                    mb-2
                  "
                >
                  Email
                </label>


                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    bg-[var(--bg)]
                    border
                    border-[var(--border)]
                    rounded-lg
                    px-4
                    py-3
                    text-[var(--text)]
                    placeholder:text-[var(--text-muted)]
                    outline-none
                    focus:border-[var(--accent)]
                    transition-all
                    duration-300
                  "
                />

              </div>


              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="mt-5">

                <label
                  className="
                    block
                    text-sm
                    text-[var(--text-secondary)]
                    mb-2
                  "
                >
                  Message
                </label>


                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="
                    w-full
                    bg-[var(--bg)]
                    border
                    border-[var(--border)]
                    rounded-lg
                    px-4
                    py-3
                    text-[var(--text)]
                    placeholder:text-[var(--text-muted)]
                    outline-none
                    resize-none
                    focus:border-[var(--accent)]
                    transition-all
                    duration-300
                  "
                />

              </div>


              {/* =================================================
                  SEND BUTTON
              ================================================= */}

              <button
                type="submit"
                disabled={sending}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  mt-6
                  bg-[var(--accent)]
                  text-[#111111]
                  font-semibold
                  py-3.5
                  rounded-lg
                  border
                  border-[var(--accent)]
                  hover:bg-[var(--accent-hover)]
                  hover:border-[var(--accent-hover)]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  disabled:hover:translate-y-0
                "
              >

                <FaPaperPlane />

                {sending
                  ? "Sending..."
                  : "Send Message"}

              </button>


              {/* =================================================
                  STATUS MESSAGE
              ================================================= */}

              {status && (

                <p
                  className={`
                    text-center
                    text-sm
                    mt-4
                    ${
                      status.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  `}
                >
                  {status}
                </p>

              )}

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}


// =====================================================
// Export Component
// =====================================================

export default Contact;