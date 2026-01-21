// src/components/About.js
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function About() {
  const { t } = useTranslation();

  const skills = useMemo(
    () => [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
    []
  );

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-200 px-6 py-20 pb-20"
    >
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t("about.title")}
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Foto */}
        <motion.div
          className="relative w-60 h-60 md:w-72 md:h-72 mx-auto about-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glow principal */}
          <motion.div
            className="absolute -inset-6 rounded-full about-photo-glow"
            initial={{ opacity: 0.15, filter: "blur(18px)" }}
            whileInView={{ opacity: 0.75, filter: "blur(34px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            aria-hidden="true"
          />

          {/* Glow secundario (ANTES morado, AHORA azul) */}
          <motion.div
            className="absolute -inset-1 rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.55), rgba(96,165,250,0.14) 55%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <motion.img
            src="/images/foto_personal2.png"
            alt={t("about.photoAlt")}
            className="relative z-10 w-full h-full rounded-full object-cover object-top bg-slate-900 shadow-xl"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </motion.div>

        {/* Texto + skills */}
        <div>
          <motion.p
            className="text-blue-400 font-medium mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("about.tagline")}
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("about.intro")}
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("about.experience")}
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("about.fullstack")}
          </motion.p>

          <motion.ul
            className="space-y-2 text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <li>• {t("about.points.architecture")}</li>
            <li>• {t("about.points.quality")}</li>
            <li>• {t("about.points.production")}</li>
            <li>• {t("about.points.learning")}</li>
          </motion.ul>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex items-center gap-2 bg-gray-700/50 border border-gray-600/40 px-4 py-2 rounded-xl transition
                  ${["React", "Next.js"].includes(skill.name)
                    ? "opacity-80 hover:opacity-100"
                    : "hover:bg-gray-600"
                  }`}
                title={skill.name}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
