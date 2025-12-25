import React from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    title: "Neon AI Dashboard",
    description:
      "A real-time analytics dashboard powered by machine learning algorithms to predict crypto market trends.",
    tech: ["React", "Python", "TensorFlow", "Tailwind"],
    image: "/api/placeholder/600/400",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "CyberDefi Wallet",
    description:
      "Secure, non-custodial wallet with multi-chain support and biometric authentication integration.",
    tech: ["React Native", "Solidity", "Web3.js"],
    image: "/api/placeholder/600/400",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Neural Vision API",
    description:
      "SaaS platform offering computer vision API endpoints for image recognition and automated tagging.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
    image: "/api/placeholder/600/400",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = ({ isDark }) => (
  <section
    id="projects"
    className="py-16 relative bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Featured Work"
        subtitle="A selection of projects exploring the intersection of Design, Code, and AI."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-stone-200 dark:border-slate-700/50 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-cyan-900/20"
          >
            <div className="h-48 bg-stone-100 dark:bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-slate-100 dark:from-slate-900 to-transparent z-10"></div>
              <div className="w-full h-full flex items-center justify-center bg-stone-50/50 dark:bg-slate-900/50">
                <Code2
                  className="text-stone-400 dark:text-slate-600"
                  size={48}
                />
              </div>
            </div>

            <div className="p-6 relative z-20 -mt-10">
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-50 dark:bg-slate-900/50 text-cyan-700 dark:text-cyan-200/70 border border-cyan-100 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  className="flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/link"
                >
                  <ExternalLink
                    size={16}
                    className="group-hover/link:scale-110 transition-transform"
                  />{" "}
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors group/link"
                >
                  <Github
                    size={16}
                    className="group-hover/link:scale-110 transition-transform"
                  />{" "}
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
