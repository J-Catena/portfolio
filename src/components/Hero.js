// src/components/Hero.js
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white px-6 pb-20
                 flex flex-col justify-center items-center text-center
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
    
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          background: `
            linear-gradient(135deg,
              transparent 0%,
              rgba(255,255,255,0.00) 34%,
              rgba(255,255,255,0.10) 38%,
              rgba(59,130,246,0.22) 41%,
              rgba(255,255,255,0.06) 44%,
              rgba(255,255,255,0.00) 48%,
              transparent 100%),
            linear-gradient(135deg,
              transparent 0%,
              rgba(255,255,255,0.00) 52%,
              rgba(255,255,255,0.08) 55%,
              rgba(59,130,246,0.18) 58%,
              rgba(255,255,255,0.05) 61%,
              rgba(255,255,255,0.00) 64%,
              transparent 100%),
            linear-gradient(135deg,
              transparent 0%,
              rgba(255,255,255,0.00) 68%,
              rgba(255,255,255,0.06) 71%,
              rgba(59,130,246,0.14) 74%,
              rgba(255,255,255,0.04) 77%,
              rgba(255,255,255,0.00) 80%,
              transparent 100%)
          `,
        }}
        animate={{
          opacity: [0.22, 0.55, 0.26],
          scaleX: [0.98, 1.03, 0.98],
          scaleY: [0.98, 1.02, 0.98],
          filter: ["blur(0px)", "blur(1.5px)", "blur(0px)"],
          x: [0, 8, 0],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          background:
            "radial-gradient(85% 55% at 50% 40%, rgba(59,130,246,0.22), transparent 70%)",
        }}
        animate={{
          opacity: [0.18, 0.35, 0.20],
          scaleX: [0.98, 1.02, 0.98],
          scaleY: [0.98, 1.05, 0.98],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(85% 70% at 50% 45%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(85% 70% at 50% 45%, black 60%, transparent 100%)",
        }}
      />

      {/* Viñeta (estática) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(95% 75% at 50% 50%, transparent 50%, rgba(2,6,23,0.92) 100%)",
        }}
      />

      {/* Fade inferior (estática) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(2,6,23,0.95))",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4"
        >
          {t("hero.greeting")}{" "}
          <span className="text-blue-400">{t("hero.name")}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl text-gray-400 mb-8"
        >
          {t("hero.role")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl font-medium transition
                       shadow-xl hover:shadow-blue-500/40"
          >
            {t("hero.viewProjects")} <ArrowRight size={18} />
          </a>
          <a
            href="/CV Juan Catena.pdf"
            download="CV Juan Catena.pdf"
            className="border border-blue-400 px-6 py-3 rounded-2xl hover:bg-blue-500 hover:text-white transition"
          >
            {t("hero.downloadCV")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
