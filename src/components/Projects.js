// src/components/Projects.js
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "springtrip",
      title: t("projects.springtrip.title"),
      desc: t("projects.springtrip.desc"),
      img: "/images/foto-proyecto-springtrip.png",
      demo: "https://spring-trip.vercel.app",
      github: "https://github.com/J-Catena/SpringTrip",
    },
    {
      id: "storeflow",
      title: t("projects.storeflow.title"),
      desc: t("projects.storeflow.desc"),
      img: "/images/foto-proyecto-storeflow.png",
      demo: "",
      github: "https://github.com/J-Catena/StoreFlow",
    },
    {
      id: "webstihl",
      title: t("projects.webstihl.title"),
      desc: t("projects.webstihl.desc"),
      img: "/images/foto-proyecto-stihl.png",
      demo: "https://www.jorgegarciastihl.es/",
      github: "https://github.com/J-Catena/Web-Stihl",
    },
    {
      id: "todomotor",
      title: t("projects.todomotor.title"),
      desc: t("projects.todomotor.desc"),
      img: "/images/foto-proyecto-blog.png",
      demo: "https://jcatena.pythonanywhere.com/",
      github: "https://github.com/J-Catena/Blog-Django",
    },
    {
      id: "scenra",
      title: t("projects.scenra.title"),
      desc: t("projects.scenra.desc"),
      img: "/images/foto-proyecto-scenra.png",
      demo: "https://scenra-app.vercel.app/",
      github: "https://github.com/J-Catena/Scenra-app",
    },
    {
      id: "travelsplit",
      title: t("projects.travelsplit.title"),
      desc: t("projects.travelsplit.desc"),
      img: "/images/foto-proyecto-travelsplit.png",
      demo: "https://travel-split-one.vercel.app/",
      github: "https://github.com/J-Catena/TravelSplit",
    },
  ];

  const initialCount = 4;

  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, initialCount);
  }, [showAll, projects]);

  const handlePointerMove = (e) => {
    // Respeta reduced motion
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = e.currentTarget; // el <section>
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
    el.style.setProperty("--spot-opacity", "1");
  };

  const handlePointerLeave = (e) => {
    e.currentTarget.style.setProperty("--spot-opacity", "0");
  };

  return (
    <section
      id="projects"
      className="projects-spotlight py-20 pb-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 px-4 sm:px-6 md:px-12"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
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
          className={`grid gap-10 ${
            projects.length > 1 ? "md:grid-cols-2" : "max-w-xl mx-auto"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-400 hover:bg-gray-700 transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

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
                      className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                      {t("projects.demo")}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 border border-indigo-400 text-indigo-400 rounded-xl text-sm hover:bg-indigo-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > initialCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-3 rounded-xl border border-gray-600 text-gray-200 hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {showAll ? t("projects.showLess") : t("projects.showMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
