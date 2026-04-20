
"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, Terminal, Zap, Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const experiences = [
    {
      company: "Udaan Technologies Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Feb 2025 — Present",
      location: "Indirapuram, UP",
      description: "Architecting scalable frontends with React & Redux. Specialized in Shadcn UI & performance tuning.",
      skills: ["React", "Redux", "Shadcn", "Tailwind"]
    },
    {
      company: "Invoxico Technologies",
      role: "Frontend Developer",
      period: "Nov 2022 — Oct 2024",
      location: "Mohali, PB",
      description: "Optimized web performance and managed complex RESTful services with strict Git workflows.",
      skills: ["React", "API", "GitHub", "JS"]
    },
    // {
    //   company: "Axionic Software Pvt. Ltd.",
    //   role: "Full Stack Developer",
    //   period: "2022 — 2023",
    //   location: "Yamuna Nagar, HR",
    //   description: "Developed end-to-end MERN stack solutions. Engineered robust backend APIs with Node.js.",
    //   skills: ["MongoDB", "Node.js", "Express", "React"]
    // }
  ];

  return (
    <section className="py-20 bg-white relative" id="experience" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="mb-16 space-y-2" data-aos="fade-up">
          <div className="flex items-center gap-2 text-[#2D4E9D] font-mono font-bold tracking-widest text-[10px] uppercase italic">
            <div className="w-8 h-[1px] bg-[#2D4E9D]"></div> Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Professional <span className="text-[#8CC63F]">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Animated Path Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#2D4E9D] -translate-x-1/2 origin-top z-10"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Compact Sleek Card */}
                <div 
                  className="w-full md:w-[44%] group pl-8 md:pl-0" 
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="relative p-6 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:border-[#2D4E9D]/30 hover:shadow-xl hover:shadow-slate-100 group">
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-[#2D4E9D]">
                        <Terminal size={16} />
                        <span className="text-[10px] font-bold font-mono tracking-tighter opacity-60 italic">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-slate-400 font-bold uppercase">
                        <MapPin size={10} /> {exp.location}
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 mb-0.5 tracking-tight group-hover:text-[#2D4E9D] transition-colors">
                        {exp.company}
                    </h3>
                    <p className="text-[#8CC63F] font-bold text-[11px] mb-3 uppercase tracking-wider">{exp.role}</p>
                    
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                        {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-50 text-[9px] font-bold text-slate-500 rounded border border-slate-100 flex items-center gap-1">
                          <Zap size={8} className="text-[#8CC63F]" /> {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Smaller Node Point */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#2D4E9D] group-hover:bg-[#8CC63F] transition-all" />
                </div>

                <div className="hidden md:block md:w-[44%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}