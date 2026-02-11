import React from "react";
import { Code2, ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { certificates_images } from "../assets/assets";

const PROJECTS = [
  {
    title: "StudyMate",
    description:
      "A GenAI-powered smart Learning Assistant using RAG to generate adaptive quizzes, smart teaching and deliver multimodal learning through an AI Coach and  educational podcasts.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Supabase",
      "Vector Embeddings",
      "Azure TTS",
      "LLM APIs",
      "Clerk"
    ],
    image: certificates_images.studymate,
    liveLink: "https://learning-assistant-ten.vercel.app/",
    githubLink: "https://github.com/Shridhan15/Learning-Assistant",
  },
  ,
  {
    title: "Prescripto",
    description:
      "A MERN-based platform for booking doctor appointments with secure online payments and admin-managed scheduling.",
    tech: ["React", "NodeJs", "Express", "MongoDB", "TailwindCSS", "Razorpay"],
    image: certificates_images.prescripto_img,
    liveLink: "https://prescripto-frontend-29f1.onrender.com/",
    githubLink: "https://github.com/Shridhan15/Prescripto",
  },

  {
    title: "Forever- eCommerce",
    description:
      "A full-stack ecommerce application with product management, cart functionality, and admin-controlled order handling.",
    tech: ["React", "MongoDB", "NodeJs", "Express", "Stripe"],
    image: certificates_images.forever_img,
    liveLink: "https://forever-frontend-rho-green.vercel.app/",
    githubLink: "https://github.com/Shridhan15/Forever-Ecommerce-",
  },
  {
    title: "Project Planner",
    description:
      "A full-stack collaboration platform for creating projects, managing join requests, and real-time team communication.",
    tech: [
      "React",
      "Web Sockets",
      "Cloudinary",
      "NodeJs",
      "Express",
      "MongoDB",
      "TailwindCSS",
    ],
    image: certificates_images.project_partner_img,
    liveLink: "https://project-planner-client-ky9j.onrender.com/",
    githubLink: "https://github.com/Shridhan15/Project-Planner",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-slate-800/40 rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col h-full will-change-transform"
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="aspect-video bg-stone-100 dark:bg-slate-900 relative overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-stone-50 to-stone-200 dark:from-slate-800 dark:to-slate-900">
                  <Code2
                    className="text-stone-400 dark:text-slate-600 animate-pulse"
                    size={48}
                  />
                </div>
              )}

              {/* Subtle Overlay for transition */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />

              {/* Tech Stack Floating (Top Right) */}
              <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.tech.slice(0, 2).map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-3 flex flex-col flex-1 relative bg-white dark:bg-transparent">
              {/* Title & Badge */}
              <div className="mb-2">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="h-1 w-12 bg-cyan-500 rounded-full mt-1 group-hover:w-20 transition-all duration-500" />
              </div>

              {/* Description with better line height */}
              <p className="text-stone-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags (Lower section) */}
              <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[11px] font-semibold rounded-lg bg-stone-100 dark:bg-slate-900/80 text-stone-600 dark:text-cyan-300/90 border border-stone-200 dark:border-slate-700/50 transition-colors group-hover:border-cyan-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Refined Links */}
              <div className="flex items-center gap-6 pt-3 border-t border-stone-100 dark:border-slate-700/50">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all group/link"
                >
                  <ExternalLink
                    size={16}
                    className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                  />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-all group/link"
                >
                  <Github
                    size={16}
                    className="group-hover/link:rotate-12 transition-transform"
                  />
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
