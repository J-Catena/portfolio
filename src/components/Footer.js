// src/components/Footer.js
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 gap-6">
        {/* Autoría */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} {t("footer.designedBy")}{" "}
          <span className="text-white font-medium">Juan Catena</span>
        </p>

        {/* Redes sociales */}
        <div className="flex gap-5">
          <a
            href="mailto:juancatena91@gmail.com"
            className="hover:text-indigo-400 transition-colors"
            aria-label={t("footer.email")}
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/J-Catena"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-catena-marin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
