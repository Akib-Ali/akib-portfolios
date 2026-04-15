


"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/moving-border";
import { resumeLink } from "./common";
import Image from "next/image";

export default function Hero() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-[95vh] flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16 px-6 md:px-12 bg-cover bg-center"
            aria-label="Hero section introducing Akib Ali"
            style={{ backgroundImage: "url('/New_with_mobile.jpg')" }}
        >
            <BackgroundBeamsWithCollision className="absolute inset-0 z-0 bg-transparent">
                <></>
            </BackgroundBeamsWithCollision>

            {/* Left: Text */}
            <div className="flex-1 max-w-7xl mx-auto text-center md:text-left space-y-2 text-white relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-3xl font-medium"
                >
                    Hello, my name is
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-bold"
                >
                    Akib Ali{" "}
                    <motion.span
                        animate={{ rotate: [0, 20, -10, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        className="inline-block origin-[70%_70%]"
                    >
                        👋
                    </motion.span>
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-3xl font-semibold"
                >
                    I&apos;m a{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]">
                        <Typewriter
                            // words={["Software Engineer", "React Developer", "Full Stack Developer"]}
                            words={["Frontend Engineer", "React Specialist", "MERN Stack Developer"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </motion.h3>

                {/* Plain text for SEO */}
                <p className="sr-only">
                    Full Stack Developer | React Developer | Software Engineer | Akib Ali
                </p>

                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white h-14 text-black border border-neutral-500 hover:bg-gray-100 transition"
                    >
                        <a href={resumeLink} download rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </Button>

                    <Button
                        onClick={scrollToContact}
                        borderRadius="1.75rem"
                        className="text-white h-14 border border-white hover:bg-white hover:text-black transition"
                        aria-label="Scroll to contact section"
                    >
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    );
}

