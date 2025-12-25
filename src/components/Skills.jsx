import React from "react";

const SKILLS = {
  "AI / ML": [
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "NumPy",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Pandas",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "Scikit-Learn",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "Matplotlib",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    },
    {
      name: "OpenCV",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
  ],
  "Full Stack": [
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      src: "https://cdn.simpleicons.org/express/000000",
      darkSrc: "https://cdn.simpleicons.org/express/white",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    { name: "JWT Auth", src: "https://jwt.io/img/pic_logo.svg" },
    {
      name: "REST APIs",
      icon: <Globe size={20} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "WebSockets",
      icon: <Network size={20} className="text-pink-600 dark:text-pink-400" />,
    },
  ],
  Tools: [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      invert: true,
    },
    {
      name: "Cloudinary",
      src: "https://cdn.simpleicons.org/cloudinary/3448C5",
    },
    {
      name: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Clerk",
      src: "https://cdn.simpleicons.org/clerk/000000",
      darkSrc: "https://cdn.simpleicons.org/clerk/white",
    },
    { name: "Razorpay", src: "https://cdn.simpleicons.org/razorpay/3395FF" },
    {
      name: "Vercel",
      src: "https://cdn.simpleicons.org/vercel/000000",
      darkSrc: "https://cdn.simpleicons.org/vercel/white",
    },
    {
      name: "Render",
      src: "https://cdn.simpleicons.org/render/000000",
      darkSrc: "https://cdn.simpleicons.org/render/white",
    },
    { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/635BFF" },
  ],
};
import { Wrench, Brain, Layers, Globe, Network } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Skills = ({ isDark }) => (
  <section
    id="skills"
    className="py-16 bg-stone-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Technical Arsenal"
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, items]) => {
          // Define category-specific styles
          let borderColor = "border-stone-300 dark:border-slate-800";
          let glowColor = "hover:border-stone-400 dark:hover:border-slate-600";
          let shadowColor =
            "hover:shadow-lg hover:shadow-stone-200 dark:hover:shadow-none";
          let titleIcon = <Wrench size={18} />;
          let titleColor = "text-emerald-600 dark:text-emerald-400";
          let bgIcon = "bg-emerald-100 dark:bg-emerald-500/10";
          let gradient =
            "from-green-100/50 to-emerald-100/50 dark:from-green-500/20 dark:to-emerald-600/20";

          if (category === "AI / ML") {
            borderColor = "border-cyan-300 dark:border-cyan-900/50";
            glowColor = "hover:border-cyan-400 dark:hover:border-cyan-500/50";
            shadowColor =
              "hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/10";
            titleIcon = <Brain size={18} />;
            titleColor = "text-cyan-600 dark:text-cyan-400";
            bgIcon = "bg-cyan-100 dark:bg-cyan-500/10";
            gradient =
              "from-cyan-100/50 to-blue-100/50 dark:from-cyan-500/20 dark:to-blue-600/20";
          } else if (category.includes("Full Stack")) {
            borderColor = "border-purple-300 dark:border-purple-900/50";
            glowColor =
              "hover:border-purple-400 dark:hover:border-purple-500/50";
            shadowColor =
              "hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10";
            titleIcon = <Layers size={18} />;
            titleColor = "text-purple-600 dark:text-purple-400";
            bgIcon = "bg-purple-100 dark:bg-purple-500/10";
            gradient =
              "from-purple-100/50 to-pink-100/50 dark:from-purple-500/20 dark:to-pink-600/20";
          } else {
            // Tools
            borderColor = "border-emerald-300 dark:border-emerald-900/50";
            glowColor =
              "hover:border-emerald-400 dark:hover:border-emerald-500/50";
            shadowColor =
              "hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/10";
          }

          return (
            <div key={category} className="relative group/card h-full">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} rounded-2xl blur opacity-0 group-hover/card:opacity-100 dark:opacity-75 transition duration-500`}
              ></div>
              <div className="relative h-full bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 hover:bg-stone-50/50 dark:hover:bg-slate-900/80 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                <h3
                  className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-stone-900"
                  } mb-6 flex items-center gap-3`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg ${bgIcon} flex items-center justify-center ${titleColor}`}
                  >
                    {titleIcon}
                  </span>
                  {category}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {items.map((skill, i) => {
                    let finalSrc = skill.src;
                    let invertClass = "";

                    // Handling icon color for light vs dark mode
                    if (
                      [
                        "Express.js",
                        "Vercel",
                        "Clerk",
                        "Render",
                        "AWS",
                      ].includes(skill.name)
                    ) {
                      if (!isDark) {
                        // Light mode: ensure black icon
                        finalSrc = skill.darkSrc
                          ? skill.darkSrc.replace("white", "000000")
                          : skill.src;
                        invertClass = "";
                      } else {
                        // Dark mode: ensure white icon
                        finalSrc = skill.darkSrc || skill.src;
                        if (skill.invert) invertClass = "invert";
                      }
                    }

                    return (
                      <div
                        key={i}
                        className={`flex flex-col items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-950 border ${borderColor} ${glowColor} ${shadowColor} hover:-translate-y-1 hover:scale-105 transition-all duration-300 group/skill h-16 w-full`}
                      >
                        <div className="w-8 h-8 mb-1 flex items-center justify-center transition-transform group-hover/skill:-translate-y-1 duration-300">
                          {skill.icon ? (
                            skill.icon
                          ) : (
                            <img
                              src={finalSrc}
                              alt={skill.name}
                              className={`w-full h-full object-contain ${invertClass}`}
                            />
                          )}
                        </div>
                        <span
                          className={`text-[10px] text-stone-600 dark:text-slate-400 group-hover/skill:${titleColor.replace(
                            "text-",
                            ""
                          )} font-medium text-center leading-tight`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
