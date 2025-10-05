"use client";
import { useState , useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/hero";
import About from "@/components/about";
import SkillMain from "@/components/skill";
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contact";
import Loader from "@/components/Loader";
import ProjectSection from "@/components/project";

export default function Home() {
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Simulate loading delay (ya fetch data etc.)
    const timer = setTimeout(() => setLoading(false), 500); // 1s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // page load pe spinner


  return (


    <main className="w-full min-h-screen flex flex-col">
      <Hero />
      <About />
      <SkillMain />
      <ProjectSection/>
      <Testimonial />
      <ContactUs />
    </main>



  );
}
