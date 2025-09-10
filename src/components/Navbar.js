import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo o Nombre */}
                <a href="#hero" className="text-2xl font-bold text-gray-800">
                    MiPortfolio
                </a>

                {/* Links */}
                <ul className="flex space-x-6 text-gray-600 font-medium">
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-blue-500 transition-colors duration-300"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}
