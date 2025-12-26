import React from "react";
import { certificates_images } from "../assets/assets";

const CERTIFICATES = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    issueDate: "November 2025",
    certId: "103074793OCI25AICFA",
    description:
      "Certification focused on foundational concepts of AI and GenAI, covering machine learning principles, deep learning architectures, large language models, and Oracle Cloud Infrastructure AI services. The program emphasizes understanding AI workflows and applying OCI AI, ML, and Generative AI services in real-world cloud environments.",
    skills: [
      "Artificial Intelligence Fundamentals",
      "Generative AI",
      "Machine Learning",
      "Supervised Learning",
      "OCI",
      "OCI AI Services",
      "Oracle 23AI",
      "Select AI",
    ],
    image: certificates_images.oracleCert,
    verifyLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7312D02291904CFD13E6F4256CB6EBFE4CCD0BCFB4C89ACAA77FAEAEA1E661E9",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Simplilearn",
    issueDate: "September 2025",
    certId: "8935620",
    description:
      "Comprehensive full stack development certification covering frontend frameworks, backend development, databases, and cloud-ready application design. The program focused on building scalable, secure, and production-ready web applications using modern technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "SQL",
      "Cloud Fundamentals",
    ],
    image: certificates_images.simplilearnCert,
    verifyLink: "https://lnkd.in/geuF_53d",
  },
  {
    title: "React (Frontend Developer) Skills Test",
    issuer: "HackerRank",
    issueDate: "August 2025",
    certId: "44F28E1A14E8",
    description:
      "Successfully cleared the HackerRank React (Frontend Developer) Skills Test, validating hands-on knowledge of React fundamentals, modern JavaScript, component-based architecture, hooks, state management, and frontend problem-solving best practices.",
    skills: [
      "React.js",
      "Components",
      "Hooks",
      "State Management",
      "JavaScript",
      "Frontend Problem Solving",
      "Best Practices",
    ],
    image: certificates_images.hackerrankCert,
    verifyLink: "https://www.hackerrank.com/certificates/44f28e1a14e8",
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
              <div className="w-full h-full relative">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-100/50 dark:bg-slate-800">
                    <FileText className="text-stone-400 dark:text-slate-600 w-16 h-16" />
                  </div>
                )}
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
