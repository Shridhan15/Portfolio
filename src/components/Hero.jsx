import React from "react";
import { Eye, Download, Github, Code2, Linkedin } from "lucide-react";
import { certificates_images } from "../assets/assets";

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-12 overflow-hidden bg-stone-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-left space-y-6 relative z-10 w-full">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 dark:border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-600 dark:bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600 dark:bg-cyan-500"></span>
            </span>
            Available for Hire
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-stone-900 dark:text-white leading-tight font-space-grotesk mb-4 drop-shadow-sm dark:drop-shadow-xl transition-colors duration-300">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500">
              Shridhan
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-stone-700 dark:text-slate-300 font-light transition-colors duration-300">
            Full-Stack &{" "}
            <span className="text-cyan-600 dark:text-cyan-300 font-medium">
              AI Developer
            </span>
          </h2>
        </div>

        <div className="text-stone-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-xl space-y-4 transition-colors duration-300 font-medium">
          <p>
            I build systems that think. My passion lies in bridging the gap
            between{" "}
            <span className="text-stone-900 dark:text-slate-200 font-semibold">
              Full-Stack Development
            </span>{" "}
            and{" "}
            <span className="text-stone-900 dark:text-slate-200 font-semibold">
              Artificial Intelligence
            </span>
            .
          </p>
          <p>
            Currently, I focus on integrating Large Language Models (LLMs) into
            accessible web applications, ensuring that complex tech remains
            user-friendly. When I'm not coding, I'm deep-diving into{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">
              Rust
            </span>{" "}
            or exploring generative art.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="inline-flex rounded-xl overflow-hidden shadow-xl shadow-cyan-500/20 dark:shadow-cyan-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/40">
            <a
              href={certificates_images.resume}
              target="_blank"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-600 dark:to-blue-600 text-white px-6 py-3.5 font-medium flex items-center gap-2 hover:from-cyan-500 hover:to-purple-500 dark:hover:from-cyan-500 dark:hover:to-blue-500 transition-colors flex-1 justify-center sm:flex-none"
            >
              <Eye size={20} /> View Resume
            </a>

            <div className="w-[1px] bg-white/20"></div>

            <a
              href={certificates_images.resume}
              download
              className="bg-purple-600 dark:bg-blue-600 text-white px-5 py-3.5 flex items-center justify-center hover:bg-purple-500 dark:hover:bg-blue-500 transition-colors"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download size={20} />
            </a>
          </div>

          <div className="flex gap-4 sm:ml-4 justify-start">
            <a
              href="https://github.com/Shridhan15"
              target="_blank"
              className="p-3.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-stone-500 dark:text-slate-300 hover:bg-stone-50 dark:hover:bg-slate-800 hover:border-[#0077b5] group transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="group-hover:text-black dark:group-hover:text-white transition-colors"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shridhan-suman-3970a3293/"
              target="_blank"
              className="p-3.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-[#0077b5] hover:bg-stone-50 dark:hover:bg-slate-800 hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="group-hover:text-black dark:group-hover:text-white transition-colors"
              />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shridhan.suman@gmail.com"
              target="_blank"
              className="p-3.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-[#EA4335] hover:bg-stone-50 dark:hover:bg-slate-800 hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)] transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <img
                src="https://cdn.simpleicons.org/gmail/EA4335"
                className="w-6 h-6"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="relative hidden lg:block w-full max-w-xs xl:max-w-sm mx-auto group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-600 rounded-2xl blur opacity-30 dark:opacity-20 group-hover:opacity-50 dark:group-hover:opacity-40 transition duration-500"></div>

        <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-stone-100 dark:border-slate-700 p-2 transform group-hover:rotate-0 lg:rotate-3 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none">
          <div className="aspect-[4/5] bg-stone-50 dark:bg-slate-900 rounded-xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
              alt="Shridhan Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-slate-900 dark:via-transparent dark:to-transparent opacity-30 dark:opacity-40"></div>
          </div>
        </div>

        <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-stone-100 dark:border-slate-700 p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-black/50 animate-bounce-slow hidden xl:block">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 dark:bg-green-500/20 text-emerald-600 dark:text-green-400 rounded-lg">
              <Code2 size={20} />
            </div>
            <div>
              <div className="text-xs text-stone-500 dark:text-slate-400 font-medium">
                Current Focus
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-white">
                Full-Stack AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
