import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Web Stihl",
            desc: "Sitio web corporativo hecho con Django, Python y TailwindCSS. Actualmente desplegado en producción en PythonAnywhere.",
            img: "/images/stihl.png",
            demo: "https://jcatena.pythonanywhere.com",
            github: "https://github.com/J-Catena/Web-Stihl",
        },
        
       
        // AMPLIAR CON MAS PROYECTOS AQUI


    ];

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>

                <div
                    className={`grid gap-8 ${projects.length > 1 ? "md:grid-cols-2" : "max-w-md mx-auto"
                        }`}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="mb-4 text-gray-600">{project.desc}</p>
                                <div className="flex space-x-4">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-600 hover:underline"
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
