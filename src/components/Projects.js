import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Web Stihl",
            desc: "Sitio web corporativo hecho con Django, Python y TailwindCSS. Actualmente desplegado en producción en PythonAnywhere.",
            img: "/images/tienda_jorge_stihl.png",
            demo: "https://jcatena.pythonanywhere.com",
            github: "https://github.com/J-Catena/Web-Stihl",
        },
        // Más proyectos...
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 md:px-12"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Proyectos
                </h2>

                <div
                    className={`grid gap-10 ${projects.length > 1 ? "md:grid-cols-2" : "max-w-xl mx-auto"
                        }`}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transform transition duration-300 hover:scale-[1.015]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Imagen */}
                            <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-contain object-center p-4"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 border border-gray-400 text-gray-700 dark:border-gray-500 dark:text-gray-300 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
