import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen flex flex-col md:flex-row items-center justify-center 
                 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-6"
        >
            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white"
                >
                    ¡Hola! Soy <span className="text-blue-600 dark:text-blue-400">Juan Catena</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
                >
                    Desarrollador Full Stack Junior con pasión por crear interfaces modernas,
                    funcionales y atractivas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-8 flex space-x-4 justify-center md:justify-start"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                    >
                        Ver Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full 
                       hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700 transition"
                    >
                        Contacto
                    </a>
                </motion.div>
            </div>

            {/* Imagen / Avatar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex-1 flex justify-center mt-10 md:mt-0"
            >
                <img
                    src="https://ui-avatars.com/api/?name=Juan+Catena&size=256&background=0D8ABC&color=fff"
                    alt="Avatar"
                    className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
                />



            </motion.div>
        </section>
    );
}
