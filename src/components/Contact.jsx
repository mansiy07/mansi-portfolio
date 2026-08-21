// =====================================================
// File Name   : Contact.jsx
// Purpose     : Contact Section
// Author      : Mansi Yadav
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

  // ===================================================
  // Handle Input Change
  // ===================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===================================================
  // Handle Form Submit
  // ===================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all the fields.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      // Send email through EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,

          // Alternative EmailJS variable names
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      // Success
      setStatus(
        "Message sent successfully! Thank you for reaching out."
      );

      // Clear form
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

  // ===================================================
  // Return
  // ===================================================

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        bg-[#080014]
        text-white
        flex
        items-center
        py-24
        overflow-hidden
      "
    >

      {/* ================= Background Glow ================= */}

      <div
        className="
          absolute
          top-20
          left-1/4
          w-[400px]
          h-[400px]
          bg-purple-700/10
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          right-10
          bottom-10
          w-[400px]
          h-[400px]
          bg-fuchsia-700/10
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      ></div>

      {/* ================= Main Container ================= */}

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

        {/* ================= Heading ================= */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-center
          "
        >
          Get In <span className="text-purple-400">Touch</span>
        </motion.h2>

        {/* ================= Subtitle ================= */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-center
            text-gray-400
            text-lg
            max-w-2xl
            mx-auto
            mt-5
          "
        >
          I'm always open to discussing software development,
          projects, internships and new opportunities.
        </motion.p>

        {/* ================= Contact Grid ================= */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
            mt-14
          "
        >

          {/* ================= Contact Information ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-purple-950/20
              border
              border-purple-500/20
              rounded-3xl
              p-8
              md:p-10
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
            "
          >

            <h3 className="text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Feel free to reach out to me for collaboration,
              internships, projects or any software development
              opportunities.
            </p>

            {/* ================= Email ================= */}

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
                  w-14
                  h-14
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-purple-500/30
                  bg-purple-500/10
                  text-purple-400
                  text-xl
                  group-hover:bg-purple-500/20
                  group-hover:border-purple-400
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-gray-200 group-hover:text-purple-400 transition-colors">
                  mansiyadav2807@gmail.com
                </p>
              </div>

            </a>

            {/* ================= Social Links ================= */}

            <div className="flex items-center gap-4 mt-8">

              {/* GitHub */}

              <a
                href="https://github.com/mansiy07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-purple-500/30
                  text-gray-300
                  text-xl
                  hover:text-purple-400
                  hover:border-purple-400
                  hover:bg-purple-500/10
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/mansiy07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  border
                  border-purple-500/30
                  text-gray-300
                  text-xl
                  hover:text-purple-400
                  hover:border-purple-400
                  hover:bg-purple-500/10
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* ================= Contact Form ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-purple-950/20
              border
              border-purple-500/20
              rounded-3xl
              p-8
              md:p-10
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
            "
          >

            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit}>

              {/* ================= Name ================= */}

              <div className="mt-6">

                <label className="block text-sm text-gray-400 mb-2">
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
                    bg-[#080014]
                    border
                    border-purple-500/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder-gray-600
                    outline-none
                    focus:border-purple-500
                    transition-all
                  "
                />

              </div>

              {/* ================= Email ================= */}

              <div className="mt-5">

                <label className="block text-sm text-gray-400 mb-2">
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
                    bg-[#080014]
                    border
                    border-purple-500/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder-gray-600
                    outline-none
                    focus:border-purple-500
                    transition-all
                  "
                />

              </div>

              {/* ================= Message ================= */}

              <div className="mt-5">

                <label className="block text-sm text-gray-400 mb-2">
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
                    bg-[#080014]
                    border
                    border-purple-500/20
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    placeholder-gray-600
                    outline-none
                    resize-none
                    focus:border-purple-500
                    transition-all
                  "
                ></textarea>

              </div>

              {/* ================= Send Button ================= */}

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
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-600
                  text-white
                  font-semibold
                  py-3.5
                  rounded-xl
                  shadow-[0_0_25px_rgba(168,85,247,0.25)]
                  hover:from-purple-500
                  hover:to-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >

                <FaPaperPlane />

                {sending ? "Sending..." : "Send Message"}

              </button>

              {/* ================= Status ================= */}

              {status && (
                <p
                  className={`text-center text-sm mt-4 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
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