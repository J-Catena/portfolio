import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center
                bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800
                px-4 sm:px-6 md:px-12 py-16 gap-12 overflow-hidden"
    >
      {/* Elementos decorativos del fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-100 dark:bg-blue-900 opacity-20 rounded-full blur-3xl -top-10 -left-40" />
        <div className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-900 opacity-10 rounded-full blur-2xl -bottom-12 -right-24" />
      </div>

      {/* Texto principal */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight"
        >
          ¡Hola! Soy{" "}
          <span className="text-blue-600 dark:text-blue-400">Juan Catena</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
        >
          Desarrollador Full Stack enfocado en construir experiencias digitales
          eficientes y visualmente atractivas.
        </motion.p>

        {/* Stack de tecnologías destacadas */}
        <motion.div
          className="mt-3 text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          React • TailwindCSS • Django • Framer Motion
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 
              dark:bg-blue-500 dark:hover:bg-blue-600 transition flex items-center gap-2 text-sm sm:text-base"
          >
            Ver Proyectos <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full 
              hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700 
              transition text-sm sm:text-base"
          >
            Contacto
          </a>
        </motion.div>
      </div>

      {/* Imagen de perfil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex-1 flex justify-center relative z-10"
      >
        <img
          src="/images/juan-avatar.png"
          alt="Juan Catena Avatar"
          loading="lazy"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg 
            border-4 border-white dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
}
