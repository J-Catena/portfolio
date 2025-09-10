import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Framer Motion",
      icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-12 bg-white dark:bg-[#1f2937] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Soy un{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            desarrollador Full Stack
          </span>{" "}
          con formación en{" "}
          <span className="font-semibold">
            Frontend (React, TailwindCSS, JavaScript)
          </span>{" "}
          y <span className="font-semibold">Backend (Python, Django)</span>. Me
          motiva seguir aprendiendo y aportar en proyectos modernos, creando{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            aplicaciones rápidas, accesibles y fáciles de usar
          </span>
          , con código limpio y buenas prácticas. Estoy en constante evolución y
          abierto a nuevos retos, ya sea en{" "}
          <span className="font-semibold">frontend</span> o{" "}
          <span className="font-semibold">backend</span>, con el objetivo de
          seguir mejorando cada día como profesional.
        </motion.p>

        {/* Skills / Tecnologías */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                className="w-12 h-12"
              />
              <span className="mt-2 text-sm text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
