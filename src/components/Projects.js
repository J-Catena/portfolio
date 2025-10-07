// src/components/Projects.js
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.webstihl.title"),
      desc: t("projects.webstihl.desc"),
      img: "/images/foto-proyecto-stihl.png",
      demo: "https://www.jorgegarciastihl.es/",
      github: "https://github.com/J-Catena/Web-Stihl",
    },
    {
      title: t("projects.todomotor.title"),
      desc: t("projects.todomotor.desc"),
      img: "/images/foto-proyecto-blog.png",
      demo: "https://jcatena.pythonanywhere.com/",
      github: "https://github.com/J-Catena/Blog-Django",
    },
    {
      title: t("projects.scenra.title"),
      desc: t("projects.scenra.desc"),
      img: "/images/foto-proyecto-scenra.png",
      demo: "https://scenra-app.vercel.app/",
      github: "https://github.com/J-Catena/Scenra-app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 pb-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t("projects.title")}
        </motion.h2>

        <div
          className={`grid gap-10 ${projects.length > 1 ? "md:grid-cols-2" : "max-w-xl mx-auto"
            }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-400 hover:bg-gray-700 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Imagen */}
              <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm transition"
                    >
                      {t("projects.demo")}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 border border-indigo-400 text-indigo-400 rounded-xl text-sm hover:bg-indigo-500 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
