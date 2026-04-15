"use client";
import { motion } from "framer-motion";

export default function RunningSnake() {
  return (
    <div className="relative w-full py-20 flex justify-center items-center overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-white" />
      
      {/* The Main Animated Beam */}
      <div className="relative w-[90%] max-w-7xl h-[2px]">
        {/* Glow Layer */}
        <motion.div 
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4F6FB3] to-transparent blur-md h-full w-full"
        />

        {/* The Sharp Energy Line */}
        <div className="absolute inset-0 bg-slate-100 h-full w-full overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#8CC63F] to-transparent"
          />
        </div>

        {/* Floating Particles around the beam */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100, Math.random() * 500],
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            className="absolute h-1 w-1 rounded-full bg-[#2D4E9D]"
            style={{ left: `${i * 20}%`, top: "0" }}
          />
        ))}
      </div>

      {/* Subtle Text in the Middle */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute text-[10px] tracking-[0.5em] font-bold text-slate-300 uppercase"
      >
        Innovation & Performance
      </motion.div>
    </div>
  );
}