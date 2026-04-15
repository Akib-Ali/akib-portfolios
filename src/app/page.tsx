"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/hero";
import About from "@/components/about";
import SkillMain from "@/components/skill";
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contact";
import Loader from "@/components/Loader";
import ProjectSection from "@/components/project";
import Head from "next/head";
import Experience from "@/components/experience";
import CustomCursor from "@/components/CustomCursor";
import TechMarquee from "@/components/TechMarque";
import AnimatedBackground from "@/components/AnimatedBackground";
import RunningSnake from "@/components/RunningSnake";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (ya fetch data etc.)
    const timer = setTimeout(() => setLoading(false), 500); // 1s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // page load pe spinner


  return (
    <>

      <Head>
        <title>Akib Ali - Full Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="Hi! I’m Akib Ali, a Full Stack Developer specialized in React, Next.js, Node.js. Explore my projects, skills, and contact information."
        />
        <meta name="about" content="Akib Ali is a Full Stack Developer turning ideas into clean, functional, and creative digital experiences. Experienced in React, Next.js, Node.js, Supabase, Firebase, and problem solving." />

        <meta
          name="skills"
          content="Skills: HTML, CSS, JavaScript, React, Redux, TypeScript, Next.js, Node.js, MongoDB, Tailwind CSS, GitHub. Experienced Full Stack Developer with focus on performance, scalability, and clean code."
        />

        <meta name="projects" content="Projects: Mighty Warners Realty, Vizima, Clever Chachi, Nanhe Kissey, Dellatecnica, Admin Panel. Technologies: React, Next.js, Node.js, MongoDB, Tailwind CSS." />
        <meta name="google-site-verification" content="r7UzEXQFLqEBXKK7JYMUbnBH3FTtVAZW1qLMb36siqY" />


        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codebyakib.com" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Akib Ali - Full Stack Developer" />
        <meta property="og:description" content="Explore my projects, skills, and contact info." />
        <meta property="og:image" content="/New_with_mobile.jpg" />
        <meta property="og:url" content="https://codebyakib.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Akib Ali",
              "url": "https://codebyakib.com",
              "sameAs": [
                "https://github.com/Akib-Ali",
                "https://www.linkedin.com/in/akib-ali-1695081b8/"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Akib Ali",
              "skills": ["HTML", "CSS", "JavaScript", "React", "Redux", "TypeScript", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "GitHub"]
            })
          }}
        />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Portfolio",
              "name": "Akib Ali Portfolio",
              "hasPart": [
                {
                  "@type": "CreativeWork",
                  "name": "Mighty Warners Realty",
                  "url": "https://mightywarnersrealty.com/"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Vizima",
                  "url": "https://www.vizima.in/"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Clever Chachi",
                  "url": "https://www.cleverchachi.com.au/"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Nanhe Kissey",
                  "url": "https://www.nanhekissey.com/"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Dellatecnica",
                  "url": "https://dellatecnica.in/"
                }
              ]
            })
          }}
        />

      </Head>

      <CustomCursor />
      <AnimatedBackground />

      <main className="w-full min-h-screen flex flex-col">

        <Hero />
        <About />
        <TechMarquee />

        <ProjectSection />
        <RunningSnake />

        <Experience />

        <SkillMain />

        <ContactUs />
      </main>

    </>





  );
}
