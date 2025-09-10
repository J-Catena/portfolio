import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
                {/* Autoría personalizada */}
                <p className="text-sm text-center md:text-left">
                    Diseñado y desarrollado por Juan Catena – 2025
                </p>

                {/* Redes sociales */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="mailto:juancatena91@gmail.com"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/J-Catena"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juan-catena-marin"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

            {/* Tecnologías utilizadas */}
            <div className="mt-6 text-center">
                <p className="text-sm mb-3 text-gray-500 dark:text-gray-400">Tecnologías utilizadas:</p>
                <div className="flex justify-center gap-4 items-center flex-wrap">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 hover:scale-110 transition-transform" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 hover:scale-110 transition-transform" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS" className="w-6 h-6 hover:scale-110 transition-transform" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
                    <img src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" alt="Framer Motion" className="w-6 h-6 hover:scale-110 transition-transform" />
                </div>
            </div>
        </footer>
    );
}
