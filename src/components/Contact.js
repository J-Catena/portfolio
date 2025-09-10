import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Contacto
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    ¿Quieres colaborar o hablar sobre un proyecto?
                    Puedes contactarme a través de mis redes o enviarme un correo.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-y-0 md:gap-x-10 text-base sm:text-lg font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a
                        href="mailto:juancatena91@gmail.com"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Mail size={22} /> Email
                    </a>
                    <a
                        href="https://github.com/J-Catena"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Github size={22} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juan-catena-marin"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Linkedin size={22} /> LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
