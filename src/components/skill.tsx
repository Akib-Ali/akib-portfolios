
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const SkillMain = () => {
  // AOS Initialize for scroll effects
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false // 'false' karne se har baar scroll karne par animation hoga
    });
  }, []);

  const skills = [
    { name: "React.js", icon: <FaReact />, color: "text-[#2D4E9D]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-[#4F6FB3]" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#8CC63F]" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38BDF8]" },
    { name: "Redux", icon: <SiRedux />, color: "text-[#764ABC]" },
    { name: "GitHub", icon: <FaGithub />, color: "text-black" },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden" id="skills">

      {/* Background Blobs with Pulse Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#2D4E9D]/20 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#8CC63F]/20 to-transparent blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        {/* Header Section - Scroll Animation: Fade Down */}
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center" data-aos="fade-down">
          <h2 className="text-[#2D4E9D] font-mono font-black tracking-[0.4em] text-xs mb-4 uppercase">My Tech Stack</h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            Always <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D4E9D] to-[#8CC63F]">Evolving</span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-[#2D4E9D] to-[#8CC63F] mx-auto rounded-full" />
        </div>

        {/* 1. Marquee Row - Scroll Animation: Zoom In */}
        <div className="flex overflow-hidden select-none gap-10 group mb-16" data-aos="zoom-in">
          <div className="flex items-center justify-around flex-shrink-0 min-w-full gap-10 animate-marquee">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-6 px-10 py-6 hover:scale-110 transition-transform duration-300">
                <div className={`text-6xl md:text-8xl ${skill.color} drop-shadow-md`}>
                  {skill.icon}
                </div>
                <span className="text-4xl md:text-6xl font-black text-slate-200 uppercase tracking-tighter">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          {/* Loop Duplicate */}
          <div aria-hidden="true" className="flex items-center justify-around flex-shrink-0 min-w-full gap-10 animate-marquee">
            {skills.map((skill, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-6 px-10 py-6 hover:scale-110 transition-transform duration-300">
                <div className={`text-6xl md:text-8xl ${skill.color} drop-shadow-md`}>
                  {skill.icon}
                </div>
                <span className="text-4xl md:text-6xl font-black text-slate-200 uppercase tracking-tighter">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Skills Grid - Individual Skill Scroll Animation: Fade Up */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
          {skills.slice(0, 8).map((skill, i) => (
            <div
              key={`grid-${i}`}
              className="flex flex-col items-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 100} // Har icon thoda gap ke baad aayega (Staggered effect)
            >
              <div className={`text-5xl md:text-7xl ${skill.color} mb-4 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest group-hover:text-[#2D4E9D]">
                {skill.name}
              </h3>
              <div className="h-[2px] w-0 bg-[#8CC63F] group-hover:w-full transition-all duration-500 mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Rotating Background Icon */}
      <div className="absolute -bottom-20 -left-20 text-[20rem] text-slate-50 animate-spin-slow -z-10 opacity-50">
        <FaReact />
      </div>
    </section>
  );
};

export default SkillMain;