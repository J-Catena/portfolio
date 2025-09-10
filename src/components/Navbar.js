import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#hero"
                    className="text-xl font-bold text-gray-800 dark:text-white"
                >
                    Juan Catena
                </a>
                <div className="flex items-center gap-6">
                    <a
                        href="#about"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    >
                        Contacto
                    </a>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
