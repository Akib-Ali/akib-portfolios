"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiTypescript, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const SkillMain = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-out-back", once: false });
    }, []);

    return (
        <div id="skills" className="py-16 px-6 bg-white">
            {/* Heading */}

            <div className="text-center mb-12">
                <div className="text-center mb-16" data-aos="zoom-in-down">
                    <h1
                        className="flex items-center justify-center gap-3 text-4xl font-extrabold mb-6 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
                    >
                        My Skill
                    </h1>


                    <h3 className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Passionate about turning complex problems into simple, efficient solutions with a focus on
                        <span className="text-[#2D4E9D] font-semibold"> performance, scalability, </span>
                        and
                        <span className="text-[#8CC63F] font-semibold"> clean code practices. </span>
                    </h3>


                </div>
            </div>

            <div className="grid max-w-7xl m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    {
                        icon: <FaHtml5 className="text-6xl text-orange-500 mx-auto mb-4 animate-bounce-slow" />,
                        label: "HTML",
                        row: "left",
                        bg: "from-orange-50 to-white",
                    },
                    {
                        icon: <FaCss3Alt className="text-6xl text-blue-600 mx-auto mb-4 animate-pulse-slow" />,
                        label: "CSS",
                        row: "left",
                        bg: "from-blue-50 to-white",
                    },
                    {
                        icon: <FaJs className="text-6xl text-yellow-500 mx-auto mb-4 animate-wiggle-slow" />,
                        label: "JavaScript",
                        row: "left",
                        bg: "from-yellow-50 to-white",
                    },
                    {
                        icon: <FaReact className="text-6xl text-cyan-500 mx-auto mb-4 animate-spin-slow" />,
                        label: "React",
                        row: "left",
                        bg: "from-cyan-50 to-white",
                    },

                    // Second row
                    {
                        icon: <SiRedux className="text-6xl text-purple-600 mx-auto mb-4 animate-bounce-slow" />,
                        label: "Redux",
                        row: "right",
                        bg: "from-purple-50 to-white",
                    },
                    {
                        icon: <SiTypescript className="text-6xl text-blue-700 mx-auto mb-4 animate-pulse-slow" />,
                        label: "TypeScript",
                        row: "right",
                        bg: "from-blue-50 to-white",
                    },
                    {
                        icon: <SiNextdotjs className="text-6xl text-black mx-auto mb-4 animate-wiggle-slow" />,
                        label: "Next.js",
                        row: "right",
                        bg: "from-gray-100 to-white",
                    },
                    {
                        icon: <FaNodeJs className="text-6xl text-green-600 mx-auto mb-4 animate-spin-slow" />,
                        label: "Node.js",
                        row: "right",
                        bg: "from-green-50 to-white",
                    },

                    // Third row
                    {
                        icon: <SiMongodb className="text-6xl text-green-700 mx-auto mb-4 animate-bounce-slow" />,
                        label: "MongoDB",
                        row: "left",
                        bg: "from-green-100 to-white",
                    },
                    {
                        icon: <FaGithub className="text-6xl text-gray-800 mx-auto mb-4 animate-pulse-slow" />,
                        label: "GitHub",
                        row: "left",
                        bg: "from-gray-100 to-white",
                    },
                    {
                        icon: <SiTailwindcss className="text-6xl text-sky-400 mx-auto mb-4 animate-wiggle-slow" />,
                        label: "Tailwind CSS",
                        row: "left",
                        bg: "from-sky-50 to-white",
                    },
                ].map((skill, i) => (
                    <div
                        key={i}
                        className={`p-6 w-full max-w-xs mx-auto bg-gradient-to-b ${skill.bg} rounded-xl shadow-lg text-center
                 transition-transform hover:scale-105 hover:shadow-2xl`}
                        data-aos={skill.row === "left" ? "fade-right" : "fade-left"}
                        data-aos-delay={100 + (i % 4) * 100}
                    >
                        {skill.icon}
                        <h3 className="text-lg font-semibold">{skill.label}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillMain;

