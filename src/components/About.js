// src/components/About.js
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TailwindCSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Framer Motion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 py-20 pb-20"
    >
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t("about.title")}
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Foto */}
        <div className="relative w-60 h-60 md:w-72 md:h-72 mx-auto">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 blur-xl opacity-40"></div>

          <motion.img
            src="/images/foto_personal2.png"
            alt={t("about.photoAlt")}
            className="relative z-10 w-full h-full rounded-full object-cover object-top bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Texto + skills */}
        <div>
          <motion.p
            className="text-lg leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("about.paragraph")}
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-700/50 border border-gray-600/40 px-4 py-2 rounded-xl hover:bg-gray-600 transition"
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
