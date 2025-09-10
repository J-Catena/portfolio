import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Nombre */}
                <a
                    href="#hero"
                    className="text-xl font-bold text-gray-800 dark:text-white"
                >
                    Juan Catena
                </a>

                {/* Botones de escritorio */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Móvil: menú hamburguesa + dark mode */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 dark:text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil desplegable */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
