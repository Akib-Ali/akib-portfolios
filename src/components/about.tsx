"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import TextGenerationText from "./aboutTextGeneration";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./ui/moving-border";
import { MaskContainer } from "./ui/svg-mask-effect";
import { User2 } from "lucide-react";
import { Braces } from "lucide-react";
import { Fish } from "lucide-react";
import { Linkedin, Github, Code2, Server, Cloud, Rocket } from "lucide-react";


export default function About() {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
        });
    }, []);



    return (
        <section id="about" className="w-full min-h-screen bg-gray-50 py-16 px-6 md:px-12">

            <div className="text-center mb-12">
                <div className="text-center mb-16" data-aos="zoom-in-down">
                    <h1
                        className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
                    >
                        About Me
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Turning ideas into
                        <span className="text-[#2D4E9D] font-semibold"> clean, functional, </span>
                        and
                        <span className="text-[#8CC63F] font-semibold"> creative digital experiences</span>
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* <div
                    data-aos="fade-right"
                    className="flex justify-center"
                >
                    <img
                        src="/Akib_pic.jpg"
                        alt="Akib Ali"
                        className="rounded-2xl object-cover shadow-2xl"
                    />
                </div> */}

                <div data-aos="fade-right" className="flex justify-center">
                    <img
                        src="/Akib_pic.jpg"
                        alt="Akib Ali"
                        className="rounded-2xl object-cover shadow-2xl border-4 border-transparent 
              bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] p-1 
              hover:scale-105 transition"
                    />
                </div>

                {/* Right: Text */}
                <div>
                    <TextGenerationText />
                    {/* <Button borderRadius="1.75rem"
                        className="bg-white text-black border border-neutral-500 hover:bg-gray-100 transition">LinkedIN</Button>

                    <Button borderRadius="1.75rem"
                        className="bg-white text-black border border-neutral-500 hover:bg-gray-100 transition">Github</Button> */}

                    <div className="flex gap-4">
                        <Button
                            borderRadius="1.75rem"
                            className="flex items-center gap-2 bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F] text-white font-medium hover:scale-105 transition"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </Button>
                        <Button
                            borderRadius="1.75rem"
                            className="flex items-center gap-2 bg-white text-black border border-neutral-500 hover:bg-gray-100 transition"
                        >
                            <Github size={18} /> GitHub
                        </Button>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3">
                            <Code2 className="text-[#2D4E9D]" /> <p>Frontend with React & Next.js</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3">
                            <Server className="text-[#4F6FB3]" /> <p>Backend with Node.js</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3">
                            <Cloud className="text-[#8CC63F]" /> <p>APIs & Cloud (Supabase, Firebase)</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center gap-3">
                            <Rocket className="text-[#2D4E9D]" /> <p>Problem Solving Enthusiast</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
