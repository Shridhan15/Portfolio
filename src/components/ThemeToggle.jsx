import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2.5 cursor-pointer rounded-full bg-white dark:bg-slate-800 text-stone-700 dark:text-yellow-400 border border-stone-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
