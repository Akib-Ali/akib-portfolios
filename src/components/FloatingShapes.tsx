"use client";
import { motion } from "framer-motion";

export function SubtleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* 1. Static Dot Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(#2D4E9D 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* 2. Moving Gradient Light (Bahut hi halka glow jo mouse ke sath nahi, khud move hoga) */}
      <motion.div
        animate={{
          x: [0, 400, 0],
          y: [0, 200, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: "radial-gradient(circle, #8CC63F 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
      />
      
      <motion.div
        animate={{
          x: [0, -300, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #2D4E9D 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
        }}
      />
    </div>
  );
}