import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-stone-200/60 dark:border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:text-white dark:bg-none">
                Shridhan
              </span>
              <span className="text-indigo-600 dark:text-cyan-400">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-white/5 font-semibold"
                          : "text-stone-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <ThemeToggle isDark={isDark} toggle={toggleTheme} />

            <a
              href="#contact"
              className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-500/10 dark:to-purple-500/10 border border-transparent dark:border-cyan-400/30 text-white dark:text-cyan-400 transition-all duration-300 text-sm font-medium"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 dark:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-stone-200 dark:border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium
                  ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-white/5 font-semibold"
                      : "text-stone-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-white/5"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
