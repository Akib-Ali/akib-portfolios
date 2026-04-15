"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {

    const projectData = [
  {
    image: "/projects/mw-realty-2.png",
    title: "Mighty Warners Realty",
    description:
      "A premium Dubai-based real estate platform helping clients buy, sell, and manage luxury properties with expert guidance and personalized service.",
    link: "https://mightywarnersrealty.com/",
  },
  {
    image: "/projects/vizima.png",
    title: "Vizima",
    description:
      "A platform that helps students and professionals find verified PGs & hostels with meals, amenities, and hassle-free booking.",
    link: "https://www.vizima.in/",
  },
  {
    image: "/projects/clever-chachi.png",
    title: "Clever Chachi",
    description:
      "An Australian restaurant in Castle Hill offering authentic and innovative dishes in a warm, modern dining experience.",
    link: "https://www.cleverchachi.com.au/",
  },
  {
    image: "/projects/quikry.png",
    title: "Quikry",
    description:
  "Online grocery shopping platform offering fresh fruits, vegetables, daily essentials, and household items with fast and reliable doorstep delivery.",

    link: "https://quikry.com",
  },
  {
    image: "/projects/delatecinca.png",
    title: "Dellatecnica",
    description:
      "A Ludhiana-based woodworking machinery firm delivering high-quality, innovative solutions in wood and panel processing since 2004.",
    link: "https://dellatecnica.in/",
  },
  {
    image: "/projects/Admin.png",
    title: "Admin Panel",
    description:
      "A versatile admin dashboard built to manage data, users, and operations efficiently with an intuitive interface.",
    link: "#",
  },
];



  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="projects" aria-label="Akib Ali latest projects and portfolio">
      {/* 🔹 Section Header */}
      <div className="text-center mb-12 px-4" data-aos="zoom-in-down">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6
          bg-clip-text text-transparent 
          bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]"
        >
          My Latest Projects
        </h1>

        <h3 className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Building <span className="text-[#2D4E9D] font-semibold">efficient, scalable</span> applications with
          <span className="text-[#4F6FB3] font-semibold"> modern web technologies</span> and
          <span className="text-[#8CC63F] font-semibold"> clean, maintainable code</span>.  
          Each project showcases a focus on{" "}
          <span className="font-semibold">performance, functionality, and problem-solving</span>.
        </h3>
      </div>

      {/* 🔹 Project Cards Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 md:gap-8 
          px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
        "
      >
        {projectData.map((project, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col overflow-hidden p-0 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 sm:h-56 md:h-60 w-full object-cover"
              />
            </CardHeader>

            <CardContent className="flex flex-col flex-1 p-5 pt-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1">
                {project.description}
              </p>

              <CardFooter className="mt-auto p-0">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#2D4E9D] via-[#4F6FB3] to-[#8CC63F]
                    text-white font-semibold transition-transform duration-300
                    hover:scale-105 hover:shadow-[0_0_20px_rgba(79,111,179,0.6)]"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}



