"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");

  // Mouse Position Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring Physics for the outer ring
  const springConfig = { damping: 25, stiffness: 150, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement; 
      
      if (target?.closest("button, a, .clickable")) {
        setCursorVariant("active");
      } else if (target?.closest("h1, h2")) {
        setCursorVariant("text");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  // FIX: Properly typed Variants instead of 'any'
  const variants: Variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1.5px solid #2D4E9D",
    },
    active: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(45, 78, 157, 0.1)",
      border: "1px solid #8CC63F",
      transition: { type: "spring", stiffness: 250, damping: 20 }
    },
    text: {
      height: 80,
      width: 80,
      backgroundColor: "#2D4E9D",
      mixBlendMode: "difference" as "normal" | "difference", // String literal type fix
      border: "none",
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Small Core Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        className="w-1.5 h-1.5 bg-[#8CC63F] rounded-full fixed z-20"
      />

      {/* Outer Morphing Ring */}
      <motion.div
        variants={variants}
        animate={cursorVariant}
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        className="fixed rounded-full z-10 flex items-center justify-center pointer-events-none"
      >
        {cursorVariant === "active" && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             className="text-[8px] font-black text-[#2D4E9D] uppercase tracking-tighter"
           >
             View
           </motion.div>
        )}
      </motion.div>
    </div>
  );
}