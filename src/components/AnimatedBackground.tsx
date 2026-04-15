"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Navy Blue Shape */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#2D4E9D]/5 rounded-full blur-[80px]"
      />

      {/* Soft Blue Shape */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#4F6FB3]/5 rounded-full blur-[100px]"
      />

      {/* Lime Green Shape - Bottom Left */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#8CC63F]/5 rounded-full blur-[70px]"
      />
    </div>
  );
}