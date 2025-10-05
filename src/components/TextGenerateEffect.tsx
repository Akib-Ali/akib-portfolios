"use client";
import { useState, useEffect } from "react";

interface TextGenerateEffectProps {
  words: string;
  speed?: number; // 👈 optional prop (default 50ms)
}

export const TextGenerateEffect = ({ words, speed = 50 }: TextGenerateEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(words.slice(0, index + 1));
      index++;

      if (index >= words.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [words, speed]);

  return (
    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
      {displayedText}
    </p>
  );
};
