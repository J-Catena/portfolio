import { motion } from "framer-motion";

export default function About() {
    const skills = [
        { name: "HTML5", color: "bg-orange-100 text-orange-600 dark:bg-orange-600 dark:text-white" },
        { name: "CSS3", color: "bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-white" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500 dark:text-black" },
        { name: "TailwindCSS", color: "bg-teal-100 text-teal-600 dark:bg-teal-600 dark:text-white" },
        { name: "Python", color: "bg-green-100 text-green-600 dark:bg-green-600 dark:text-white" },
        { name: "Django", color: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white" },
        { name: "Git/GitHub", color: "bg-black text-white dark:bg-gray-900 dark:text-gray-200" },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-6">
            <div className="container mx-auto text-center max-w-3xl">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Sobre mí
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Soy un{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        desarrollador web frontend junior
                    </span>{" "}
                    con gran interés en aprender, crecer y aportar valor en proyectos modernos.
                    Me apasiona crear aplicaciones{" "}
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                        rápidas, accesibles y fáciles de usar
                    </span>
                    , tanto en frontend como en backend.
                </motion.p>

                {/* Habilidades */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className={`${skill.color} px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-pointer`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {skill.name}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
