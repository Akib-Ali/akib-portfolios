
"use client";
import { useEffect } from "react";
import TextGenerationText from "./aboutTextGeneration";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./ui/moving-border";
import { Linkedin, Github, Code2, Server, Cloud, Rocket } from "lucide-react";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const linkedinLink = "https://www.linkedin.com/in/akib-ali-1695081b8/";
  const githubLink = "https://github.com/Akib-Ali";

  return (
    <section id="about" className="w-full min-h-screen bg-gray-50 py-20 px-6 md:px-12">


      <div className="text-center mb-12">
        <div className="text-center mb-16" data-aos="zoom-in-down">
          {/* Main Heading with your Gradient */}
          <h1
            className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
      bg-clip-text text-transparent 
      bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
          >
            About Me
          </h1>

          {/* Developer-Focused Tagline */}
          <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
            Building
            <span className="text-[#2D4E9D] font-semibold"> high-performance frontend architectures </span>
            with a solid foundation in
            <span className="text-[#8CC63F] font-semibold"> Full Stack (MERN) development.</span>
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex justify-center"
        >
          <Image
            src="/Akib_pic.jpg"
            alt="Akib Ali - Full Stack Developer"
            width={400}
            height={400}
            className="rounded-2xl object-cover shadow-2xl border-4 border-transparent 
            bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] p-1 hover:scale-105 transition"
          />
        </div>

        {/* Right: Text */}
        <div>
          <TextGenerationText />

          {/* SEO fallback for crawlers */}
          <p className="sr-only">
            Full Stack Developer, React Developer, Next.js, Node.js, APIs, Cloud Services (Supabase, Firebase), Problem Solving, Akib Ali
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] text-white font-medium hover:scale-105 transition"
            >
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Akib Ali LinkedIn Profile"
                className="flex items-center gap-2"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </Button>

            <Button
              borderRadius="1.75rem"
              className="flex items-center gap-2 bg-white text-black border border-neutral-500 hover:bg-gray-100 transition"
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Akib Ali GitHub Profile"
                className="flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </Button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3 border-l-4 border-[#2D4E9D]">
              <Code2 className="text-[#2D4E9D]" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Modern Frontend</p>
                <p className="text-sm text-gray-500">React, Next.js, Tailwind CSS</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3 border-l-4 border-[#4F6FB3]">
              <Server className="text-[#4F6FB3]" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Full Stack Logic</p>
                <p className="text-sm text-gray-500">Node.js, Express, MongoDB</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3 border-l-4 border-[#8CC63F]">
              <Cloud className="text-[#8CC63F]" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">System Integration</p>
                <p className="text-sm text-gray-500">REST APIs, Firebase, Supabase</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3 border-l-4 border-[#2D4E9D]">
              <Rocket className="text-[#2D4E9D]" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Optimization</p>
                <p className="text-sm text-gray-500">Clean Code, SEO, Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

