import React from "react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-10 text-center md:text-left">
    <h2 className="text-3xl md:text-5xl font-bold mb-3 font-space-grotesk tracking-tight">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-700 to-stone-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
        {title}
      </span>
      <span className="text-cyan-600 dark:text-cyan-400">.</span>
    </h2>

    <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full mb-3 mx-auto md:mx-0"></div>

    {subtitle && (
      <p className="text-stone-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed font-medium">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
