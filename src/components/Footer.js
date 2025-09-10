import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
                {/* Nombre y año */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Juan Catena. Todos los derechos reservados.
                </p>

                {/* Redes sociales */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="mailto:juancatena91@gmail.com"
                        className="hover:text-blue-600 transition"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/J-Catena"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juan-catena-marin"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
