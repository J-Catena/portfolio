import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contacto
        </motion.h2>

        <motion.p
          className="text-lg mb-12 text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ¿Quieres colaborar o hablar sobre un proyecto? Puedes escribirme
          directamente o conectar en redes.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="mailto:juancatena91@gmail.com"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition"
          >
            <Mail size={22} /> Email
          </a>

          <a
            href="https://github.com/J-Catena"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-indigo-400 text-indigo-400 px-6 py-3 rounded-xl font-medium hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/30 transition"
          >
            <Github size={22} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/juan-catena-marin"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-indigo-400 text-indigo-400 px-6 py-3 rounded-xl font-medium hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/30 transition"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
