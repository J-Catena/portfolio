// src/components/Hero.js
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 text-white px-6 pb-20"
    >
      {/* Texto animado */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold mb-4"
      >
        Hola, soy <span className="text-indigo-400">Juan Catena</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl sm:text-2xl text-gray-400 mb-4"
      >
        Desarrollador Full Stack
      </motion.h2>

      {/* Botones CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-2xl font-medium transition"
        >
          Ver Proyectos <ArrowRight size={18} />
        </a>
        <a
          href="/CV Juan Catena.pdf"
          download="CV Juan Catena.pdf"
          className="border border-indigo-400 px-6 py-3 rounded-2xl hover:bg-indigo-500 hover:text-white transition"
        >
          Descargar CV
        </a>
      </motion.div>
    </section>
  );
}
