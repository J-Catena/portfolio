import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-[#111111] py-10 pt-10 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-700 dark:text-gray-400 gap-4 md:gap-0">
        {/* Autoría personalizada */}
        <p className="text-sm text-center md:text-left">
          Diseñado y desarrollado por Juan Catena – 2025
        </p>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a
            href="mailto:juancatena91@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/J-Catena"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-catena-marin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Tecnologías utilizadas */}
      <div className="mt-6 text-center">
        <p className="text-sm mb-3 text-gray-600 dark:text-gray-400">
          Tecnologías utilizadas:
        </p>
        <div className="flex justify-center gap-5 items-center flex-wrap">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="TailwindCSS"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
          <img
            src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
            alt="Framer Motion"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </footer>
  );
}
