import React from "react";

const CERTIFICATES = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    issueDate: "June 2025",
    certId: "UC-ac142...",
    description:
      "Comprehensive training in modern web development technologies including HTML5, CSS3, ES6+, Node.js, and React.",
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
    image: "/api/placeholder/600/350",
    verifyLink: "#",
  },
  {
    title: "DevOps Fundamentals",
    issuer: "IBM",
    issueDate: "July 2025",
    certId: "2baa01c9...",
    description:
      "Foundational training in cloud application development including cloud native fundamentals, DevOps practices, and IBM Cloud.",
    skills: ["Cloud Computing", "DevOps", "IBM Cloud", "Node.js"],
    image: "/api/placeholder/600/350",
    verifyLink: "#",
  },
  {
    title: "DevOps, Agile & Design Thinking",
    issuer: "IBM",
    issueDate: "July 2025",
    certId: "9dad803f...",
    description:
      "Training focused on modern software development methodologies, including DevOps practices, Agile workflows, and team collaboration.",
    skills: ["DevOps", "Agile", "Design Thinking", "Software Dev"],
    image: "/api/placeholder/600/350",
    verifyLink: "#",
  },
];

import { Eye, ArrowUpRight, FileText, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Certificates = ({ isDark }) => (
  <section
    id="certificates"
    className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Certifications"
        subtitle="Professional validation of my technical expertise."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col bg-stone-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-stone-200 dark:border-slate-700/50 hover:border-purple-400 dark:hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-black/50"
          >
            {/* Top Image Section */}
            <div className="h-48 bg-stone-100 dark:bg-slate-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-slate-100 dark:from-slate-900 to-transparent z-10"></div>
              <div className="w-full h-full flex items-center justify-center bg-stone-100/50 dark:bg-slate-800">
                <FileText className="text-stone-400 dark:text-slate-600 w-16 h-16 group-hover:text-purple-500 dark:group-hover:text-cyan-500/50 transition-colors duration-500" />
              </div>
              {/* Certification Logo Badge Overlay */}
              <div className="absolute -bottom-4 left-6 z-20 bg-white dark:bg-slate-800 p-2 rounded-xl border border-stone-200 dark:border-slate-700 shadow-lg">
                <Award className="text-purple-600 dark:text-cyan-400 w-8 h-8" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-bold text-purple-600 dark:text-cyan-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <div className="text-xs text-stone-500 font-medium mt-1">
                    Issued {cert.issueDate}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-cyan-300 transition-colors leading-tight">
                {cert.title}
              </h3>

              <p className="text-stone-600 dark:text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-white dark:bg-slate-900/80 text-purple-700 dark:text-cyan-200 border border-purple-100 dark:border-cyan-500/20 shadow-sm transition-all duration-300 group-hover:border-purple-300 dark:group-hover:border-cyan-500/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="flex cursor-pointer items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/30 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <Eye size={16} /> Preview
                </button>
                <a
                  href={cert.verifyLink}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-900/30 text-sm font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  Verify <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
