// src/components/Navbar.js
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-indigo-400">
          JC
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1 ml-4 bg-gray-800/60 backdrop-blur-sm">
            <button
              onClick={() => changeLanguage("es")}
              className={`text-sm font-semibold ${i18n.language === "es"
                  ? "text-indigo-400"
                  : "text-gray-400 hover:text-white"
                } transition`}
            >
              🇪🇸
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`text-sm font-semibold ${i18n.language === "en"
                  ? "text-indigo-400"
                  : "text-gray-400 hover:text-white"
                } transition`}
            >
              🇬🇧
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col items-center py-6 gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Switcher móvil */}
            <div className="flex items-center gap-3 mt-4 border border-gray-700 rounded-full px-3 py-1 bg-gray-900/60">
              <button
                onClick={() => changeLanguage("es")}
                className={`text-sm ${i18n.language === "es"
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                🇪🇸
              </button>
              <span className="text-gray-500">|</span>
              <button
                onClick={() => changeLanguage("en")}
                className={`text-sm ${i18n.language === "en"
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                🇬🇧
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
