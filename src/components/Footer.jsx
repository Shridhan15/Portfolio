import React from "react";

const Footer = () => (
  <footer className="py-8 bg-stone-50 dark:bg-slate-950 border-t border-stone-200 dark:border-slate-900 text-center transition-colors duration-300">
    <p className="text-stone-500 text-sm">
      © {new Date().getFullYear()} Shridhan. Crafted with{" "}
      <span className="text-cyan-600 dark:text-cyan-400">React</span> &{" "}
      <span className="text-purple-600 dark:text-purple-500">Tailwind</span>.
    </p>
  </footer>
);

export default Footer;
