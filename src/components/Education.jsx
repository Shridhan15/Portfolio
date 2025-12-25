import React from "react";
import { GraduationCap, School } from "lucide-react";
import SectionTitle from "./SectionTitle";
const EDUCATION = [
  {
    institution: "Vellore Institute of Technology",
    year: "2023 - 2027",
    status: "Pursuing",
    details: [
      { label: "Degree", value: "B.Tech" },
      { label: "Branch", value: "Computer Science" },
      { label: "CGPA", value: "8.3" },
    ],
    icon: <GraduationCap size={24} />,
    color: "text-violet-600 dark:text-purple-400",
    bg: "bg-violet-100 dark:bg-purple-500/10",
    border: "border-violet-200 dark:border-purple-500/50",
  },
  {
    institution: "Bal Vidya Mandir School, Sambhal",
    year: "2018 - 2022",
    status: "Completed",
    details: [
      { label: "Class 12 (PCM)", value: "91.2%", badge: "2022" },
      { label: "Class 10", value: "94.8%", badge: "2020" },
    ],
    icon: <School size={24} />,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    border: "border-cyan-200 dark:border-cyan-500/50",
  },
];
const Education = () => (
  <section
    id="education"
    className="py-16 bg-stone-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
  >
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-200/20 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionTitle
        title="My Education"
        subtitle="My academic journey and milestones."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="group relative h-full">
            {/* Card */}
            <div
              className={`relative h-full p-6 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 ${edu.border} transition-all duration-300 hover:shadow-xl hover:shadow-stone-200 dark:hover:shadow-cyan-900/10 hover:-translate-y-1`}
            >
              {/* Hover Gradient */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`p-3 rounded-2xl ${edu.bg} ${edu.color} mb-4`}
                  >
                    {edu.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-xs font-mono text-stone-500 dark:text-slate-400">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {edu.institution}
                </h3>

                {/* Details Grid */}
                <div className="space-y-2 bg-stone-50 dark:bg-slate-800/50 p-4 rounded-xl border border-stone-200 dark:border-slate-700/50">
                  {edu.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-stone-500 dark:text-slate-500 font-medium">
                        {detail.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-stone-700 dark:text-slate-200 font-bold">
                          {detail.value}
                        </span>
                        {/* Badge for Year if present */}
                        {detail.badge && (
                          <span className="px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-bold border border-cyan-200 dark:border-cyan-500/20">
                            {detail.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
