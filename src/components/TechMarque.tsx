
"use client";
import { motion } from "framer-motion";

export default function TechMarquee() {
  const words = ["REACT.JS", "NEXT.JS", "NODE.JS", "MONGODB", "TYPESCRIPT", "TAILWIND", "REDUX", "Redux Thunks"];

  return (
    <div className="relative py-16 bg-white overflow-hidden border-y border-slate-100">
      {/* Premium Masking */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center gap-10 group relative">
              <span 
                className="text-6xl md:text-8xl font-black tracking-tighter select-none uppercase text-transparent transition-all duration-700 relative"
                style={{ 
                  WebkitTextStroke: "1px #cbd5e1", // Visible slate-300 stroke
                }}
              >
                {/* CHAINING LAYER: Using exact project gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] bg-clip-text text-transparent transition-all duration-500 ease-in-out clip-path-zero group-hover:clip-path-full">
                  {word}
                </span>
                {word}
              </span>
              
              {/* Separator using the Lime Green from your theme */}
              <div className="w-3 h-3 rotate-45 border-2 border-slate-200 group-hover:border-[#8CC63F] group-hover:bg-[#8CC63F] transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .clip-path-zero {
          clip-path: inset(100% 0 0 0);
        }
        .group-hover\:clip-path-full {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
    </div>
  );
}







